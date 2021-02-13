/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-30 11:15:02
 * @modify date 2021-01-30 11:15:02
 * @desc [description]
 */
package com.online.giftshop.controller;

import java.util.Map;

import javax.validation.Valid;

import com.online.giftshop.dto.UpdateRequest;
import com.online.giftshop.services.AuthService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/me")
public class ProfileController {

  private final AuthService authService;

  @GetMapping
  public ResponseEntity<UpdateRequest> fetchUserDetails() {
    return ResponseEntity.status(HttpStatus.OK).body(authService.fetchUserDetailsForEdit());
  }

  @PutMapping
  public ResponseEntity<Map<String, String>> saveUserDetails(@Valid @RequestBody UpdateRequest request) {
    return ResponseEntity.status(HttpStatus.OK).body(authService.updateUser(request));
  }
  
}
