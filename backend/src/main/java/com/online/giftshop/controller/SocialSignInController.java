/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-29 11:47:56
 * @modify date 2021-01-29 11:47:56
 * @desc [description]
 */
package com.online.giftshop.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;

import javax.validation.Valid;

import com.online.giftshop.dto.LoginResponse;
import com.online.giftshop.dto.SocialSignInRequest;
import com.online.giftshop.dto.SocialSignUpRequest;
import com.online.giftshop.services.SocialSignInService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RequestMapping("/social")
@RestController
@AllArgsConstructor
public class SocialSignInController {

  private SocialSignInService signInService;

  @PostMapping("/google")
  public ResponseEntity<LoginResponse> googleSignIn(@Valid @RequestBody SocialSignInRequest request)
      throws GeneralSecurityException, IOException {
    return ResponseEntity.status(HttpStatus.OK).body(signInService.signInWithGoogle(request));
  }

  @PostMapping("/facebook")
  public ResponseEntity<LoginResponse> facebookSignIn(@Valid @RequestBody SocialSignInRequest request)
      throws GeneralSecurityException, IOException {
    return ResponseEntity.status(HttpStatus.OK).body(signInService.signInWithFacebook(request));
  }

  @PostMapping("/signup")
  public ResponseEntity<LoginResponse> socialSignUp(@Valid @RequestBody SocialSignUpRequest request)
      throws GeneralSecurityException, IOException {
    return ResponseEntity.status(HttpStatus.OK).body(signInService.socialSignUp(request));
  }

}
