/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-29 11:15:06
 * @modify date 2021-01-29 11:15:06
 * @desc [description]
 */
package com.online.giftshop.services.implementation;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.SecureRandom;
import java.util.Collections;

import com.online.giftshop.dto.LoginResponse;
import com.online.giftshop.dto.RegisterRequest;
import com.online.giftshop.dto.SocialSignInRequest;
import com.online.giftshop.dto.SocialSignUpRequest;
import com.online.giftshop.dto.UserDetailsDto;
import com.online.giftshop.entities.User;
import com.online.giftshop.exceptions.UserNotRegisteredException;
import com.online.giftshop.repositories.UserDetailsRepository;
import com.online.giftshop.security.JwtProvider;
import com.online.giftshop.services.AuthService;
import com.online.giftshop.services.SocialSignInService;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.Value;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SocialSignInServiceImpl implements SocialSignInService {

  @Autowired
  private UserDetailsRepository detailsRepository;

  @Autowired
  private JwtProvider jwtProvider;

  @Autowired
  private AuthService authService;

  @Value("${google.CLIENT_ID}")
  private String CLIENT_ID;

  @Value("${facebook.TOKEN_VALIDATION_URL}")
  private String facebookTokenValidation;

  @Override
  public LoginResponse signInWithGoogle(SocialSignInRequest request) {
    validateToken(request);
    User user = fetchUserByEmail(request);
    return createResponseToken(user.getUserId(), user.getUsername(), user.getRole());
  }

  private User fetchUserByEmail(SocialSignInRequest request) {
    return detailsRepository.findByUsernameOrEmail(request.getEmail())
      .orElseThrow(() -> new UserNotRegisteredException("social", "Please register")).getUser();
  }

  private LoginResponse createResponseToken(Long userId, String username, String role) {
    return LoginResponse.builder()
      .userId(userId)
      .username(username)
      .role(role)
      .token(jwtProvider.generateWithUsernameAndId(username, userId))
      .build();
  }

  private void validateToken(SocialSignInRequest request) {
    GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), new JacksonFactory())
        .setAudience(Collections.singletonList(CLIENT_ID)).build();

    GoogleIdToken idToken;
    try {
      idToken = verifier.verify(request.getToken());
      if (idToken != null) {
        // Required
      } else {
        System.out.println("Invalid ID token.");
        // Do NOT throw exception ele it will always fail in token validation
        // throw new UserNotRegisteredException("token", "Invalid OAuth2 token");
      }
    } catch (GeneralSecurityException | IOException e) {
      throw new UserNotRegisteredException("token", "Invalid OAuth2 token");
    }
  }

  @Override
  public LoginResponse socialSignUp(SocialSignUpRequest request) {
    UserDetailsDto details = authService.register(createUserObject(request));
    return createResponseToken(details.getUserId(), details.getUsername(), details.getRole());
  }

  private RegisterRequest createUserObject(SocialSignUpRequest request) {
    Long theRandomNum = (long) (new SecureRandom().nextDouble()*Math.pow(10,10));
    return RegisterRequest.builder()
      .emailId(request.getEmailId())
      .firstName(request.getFirstName())
      .lastName(request.getLastName())
      .phoneNo(request.getPhoneNo())
      .address(request.getAddress())
      .username(theRandomNum.toString())
      .password(theRandomNum.toString())
      .build();
  }

  @Override
  public LoginResponse signInWithFacebook(SocialSignInRequest request) {
    validateFacebookToken(request);
    User user = fetchUserByEmail(request);
    return createResponseToken(user.getUserId(), user.getUsername(), user.getRole());
  }

  private void validateFacebookToken(SocialSignInRequest request) {
    RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<Object> responseEntity = restTemplate.getForEntity("https://graph.facebook.com/me?access_token=" + request.getToken(), Object.class);
    if (responseEntity.getStatusCode() != HttpStatus.OK)
      throw new UserNotRegisteredException("token", "Invalid OAuth2 token");
  }
}
