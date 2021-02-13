/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 05:23:11
 * @modify date 2021-01-09 05:23:11
 * @desc [description]
 */
package com.online.giftshop.services;

import java.util.List;
import java.util.Map;

import com.online.giftshop.dto.ForgotPasswordRequest;
import com.online.giftshop.dto.LoginRequest;
import com.online.giftshop.dto.LoginResponse;
import com.online.giftshop.dto.RegisterRequest;
import com.online.giftshop.dto.UpdateRequest;
import com.online.giftshop.dto.UserDetailsDto;

public interface AuthService {
  LoginResponse login(LoginRequest loginRequest);

  Map<String, String> fetchSecurityQuestionForUser(String username);

  Map<String, String> validateAnswerAndUpdate(ForgotPasswordRequest forgotPasswordRequest);

  UserDetailsDto register(RegisterRequest registerRequest);

  Map<String, String> updateUser(UpdateRequest updateRequest);

  List<UserDetailsDto> fetchAllUsers();

  UserDetailsDto fetchUserById(Long id);

  UpdateRequest fetchUserDetailsForEdit();

}
