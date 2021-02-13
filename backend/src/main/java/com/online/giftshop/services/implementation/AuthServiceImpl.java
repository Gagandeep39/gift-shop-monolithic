/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-14 11:56:57
 * @modify date 2021-01-14 11:56:57
 * @desc [description]
 */
package com.online.giftshop.services.implementation;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.online.giftshop.dto.ForgotPasswordRequest;
import com.online.giftshop.dto.LoginRequest;
import com.online.giftshop.dto.LoginResponse;
import com.online.giftshop.dto.RegisterRequest;
import com.online.giftshop.dto.UpdateRequest;
import com.online.giftshop.dto.UserDetailsDto;
import com.online.giftshop.entities.Cart;
import com.online.giftshop.entities.User;
import com.online.giftshop.entities.UserDetails;
import com.online.giftshop.exceptions.InvalidCredentialException;
import com.online.giftshop.exceptions.UserNotFoundException;
import com.online.giftshop.repositories.AddressRepository;
import com.online.giftshop.repositories.CartRepository;
import com.online.giftshop.repositories.UserDetailsRepository;
import com.online.giftshop.repositories.UserRepository;
import com.online.giftshop.security.JwtProvider;
import com.online.giftshop.services.AuthService;
import com.online.giftshop.util.UserDetailsMapper;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

  private final UserRepository userRepository;
  private final AddressRepository addressRepository;
  private final UserDetailsRepository userDetailsRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtProvider jwtProvider;
  private final CartRepository cartRepository;

  @Override
  public LoginResponse login(LoginRequest loginRequest) {
    User user = findUserByUsernameOrEmailCredential(loginRequest.getUsername(), loginRequest.getPassword());
    return LoginResponse.builder()
      .userId(user.getUserId())
      .username(user.getUsername())
      .role(user.getRole())
      .token(jwtProvider.generateWithUsernameAndId(user.getUsername(), user.getUserId()))
      .build();
  }

  public User findUserByUsernameOrEmailCredential(String username, String password) {
    UserDetails details = userDetailsRepository.findByUsernameOrEmail(username).orElseThrow(() -> new InvalidCredentialException("username", "User " + username + " doesn't exist"));
    if (!passwordEncoder.matches(password, details.getUser().getPassword()))
      throw new InvalidCredentialException("password", "Invalid Password");
    return details.getUser();
  }


  @Override
  @Transactional(readOnly = true)
  public Map<String, String> fetchSecurityQuestionForUser(String username) {
    HashMap<String, String> responseMap = new HashMap<>();
    responseMap.put("username", username);
    responseMap.put("securityQuestion",
        userDetailsRepository.findByUserUsername(username)
            .orElseThrow(() -> new InvalidCredentialException("username", "User " + username + " doesn't exist"))
            .getSecurityQuestion());
    return responseMap;
  }

  @Override
  public Map<String, String> validateAnswerAndUpdate(ForgotPasswordRequest forgotPasswordRequest) {
    UserDetails userDetails = userDetailsRepository.findByUserUsername(forgotPasswordRequest.getUsername())
        .orElseThrow(() -> new InvalidCredentialException("username",
            "User " + forgotPasswordRequest.getUsername() + " doesn't exist"));
    if (!userDetails.getSecurityAnswer().equalsIgnoreCase(forgotPasswordRequest.getSecurityAnswer()))
      throw new InvalidCredentialException("securityAnswer", "Invalid Answer");
    User user = userDetails.getUser();
    user.setPassword(encodePassword(forgotPasswordRequest.getNewPassword()));
    userRepository.save(user);
    return Collections.singletonMap("userId", userDetails.getUserDetailsId().toString());
  }

  private String encodePassword(String password) {
    return passwordEncoder.encode(password);
  }

  @Override
  public UserDetailsDto register(RegisterRequest registerRequest) {
    checkIfUsernameExists(registerRequest.getUsername());
    checkIfEmailExists(registerRequest.getEmailId());
    registerRequest.setPassword(encodePassword(registerRequest.getPassword()));
    registerRequest.setAddress(addressRepository.save(registerRequest.getAddress()));
    UserDetails userDetails = userDetailsRepository.save(UserDetailsMapper.registerToUserDetails(registerRequest));
    userDetails.setCart(createCartForUser(userDetails));
    return UserDetailsMapper.userDetailsToDto(userDetailsRepository.save(userDetails));
  }

  private Cart createCartForUser(UserDetails userDetails) {
    Cart cart  = new Cart();
    cart.setUserDetails(userDetails);
    return cartRepository.save(cart);
  }

  public boolean checkIfEmailExists(String email) {
    if (!userDetailsRepository.existsByEmailId(email)) return false;
    else throw new InvalidCredentialException("emailId", "Email already exists");
  }

  public boolean checkIfUsernameExists(String username) {
    if (!userRepository.existsByUsername(username)) return false;
    else throw new InvalidCredentialException("username", "Username already exists");
  }

  @Override
  public Map<String, String> updateUser(UpdateRequest updateRequest) {
    UserDetails details = userDetailsRepository.findById(updateRequest.getUserId()).orElseThrow(() -> new UserNotFoundException());
    checkIfEmailExists(updateRequest.getEmailId());
    updateRequest.getAddress().setAddressId(details.getAddress().getAddressId());
    addressRepository.save(updateRequest.getAddress());
    userDetailsRepository.save(UserDetailsMapper.updateRequestToUserDetails(updateRequest));
    return Collections.singletonMap("userId", updateRequest.getUserId().toString());
  }

  @Override
  @Transactional(readOnly = true)
  public List<UserDetailsDto> fetchAllUsers() {
    return userDetailsRepository
      .findAll()
      .stream()
      .map(UserDetailsMapper::userDetailsToDto)
      .collect(Collectors.toList());
  }

  @Override
  @Transactional(readOnly = true)
  public UserDetailsDto fetchUserById(Long id) {
    return UserDetailsMapper.userDetailsToDto(
      userDetailsRepository
        .findById(id)
        .orElseThrow(() -> new InvalidCredentialException("userId", "ID " + id + " doesn't exist"))
    );
  }

  @Override
  public UpdateRequest fetchUserDetailsForEdit() {
    Object auth = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    String username = ((org.springframework.security.core.userdetails.UserDetails)auth).getUsername();
    UserDetails detail = userDetailsRepository.findByUserUsername(username).orElseThrow(() -> new InvalidCredentialException("username", "user " + username + " doesn't exist"));
    return UpdateRequest.builder()
      .address(detail.getAddress())
      .emailId(detail.getEmailId())
      .firstName(detail.getFirstName())
      .lastName(detail.getLastName())
      .securityQuestion(detail.getSecurityQuestion())
      .securityAnswer(detail.getSecurityAnswer())
      .userId(detail.getUser().getUserId())
      .phoneNo(detail.getPhoneNo())
      .build();
  }

}
