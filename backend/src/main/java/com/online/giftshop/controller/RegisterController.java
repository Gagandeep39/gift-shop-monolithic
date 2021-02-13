/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-20 00:21:58
 * @modify date 2021-01-20 00:21:58
 * @desc [description]
 */
package com.online.giftshop.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.online.giftshop.dto.RegisterRequest;
import com.online.giftshop.dto.UpdateRequest;
import com.online.giftshop.dto.UserDetailsDto;
import com.online.giftshop.services.AuthService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/register")
public class RegisterController {

  private final AuthService authService;

  
  @PostMapping
  public ResponseEntity<UserDetailsDto> register(@Valid @RequestBody RegisterRequest registerRequest) {
    return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(registerRequest));
  }

  @PutMapping
  public ResponseEntity<Map<String, String>> updateUser(@Valid @RequestBody UpdateRequest updateRequest) {
    return ResponseEntity.status(HttpStatus.CREATED).body(authService.updateUser(updateRequest));
  }

  @GetMapping
  public ResponseEntity<List<UserDetailsDto>> fetchAllUsers() {
    return ResponseEntity.status(HttpStatus.OK).body(authService.fetchAllUsers());
  }

  @GetMapping("/{id}")
  public ResponseEntity<UserDetailsDto> fetchUserById(@PathVariable Long id) {
    return ResponseEntity.status(HttpStatus.OK).body(authService.fetchUserById(id));
  }

  
}
