/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 07:38:35
 * @modify date 2021-01-09 07:38:35
 * @desc [description]
 */
package com.online.giftshop.security;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.online.giftshop.dto.LoginRequest;
import com.online.giftshop.dto.LoginResponse;
import com.online.giftshop.services.AuthService;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

  private AuthenticationManager authenticationManager;
  private AuthService  authService;
  private LoginRequest loginRequest;

  public JwtAuthenticationFilter(AuthenticationManager authenticationManager, 
    AuthService authService
  ) {
    this.authenticationManager = authenticationManager;
    this.authService = authService;
    setFilterProcessesUrl("/auth/login");
  }

  @Override
  public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
      throws AuthenticationException {
    try {
      loginRequest = new ObjectMapper().readValue(request.getInputStream(), LoginRequest.class);
      return authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword(), new ArrayList<>()));
    } catch (Exception e) {
      log.debug(e.getMessage());
    }
    return super.attemptAuthentication(request, response);
  }

  @Override
  protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
      Authentication authResult) throws IOException, ServletException {
    response.setContentType("application/json");
    ObjectMapper mapper = new ObjectMapper();
    OutputStream out = response.getOutputStream();
    mapper.writeValue(out, buildResponse(authResult));
  }

  // private LoginResponse buildResponse(Authentication auth) {
  //   try {
  //     log.debug(loginRequest.getPassword());
  //     User user = userRepository.findByUsername(((org.springframework.security.core.userdetails.User) auth.getPrincipal()).getUsername())
  //         .orElseThrow(() -> new RuntimeException());
  //     return LoginResponse.builder()
  //       .userId(user.getUserId())
  //       .username(user.getUsername())
  //       .role(user.getRole())
  //       .token(jwtProvider.generateTokenWithUsername(user.getUsername()))
  //       .build();
  //   } catch (Exception e) {
  //     log.info(e.getMessage());
  //   }
  //   return null;
  // }

  /**
   * Wont work
   * Password here is null
   */
  private LoginResponse buildResponse(Authentication auth) {
    return authService.login(loginRequest);
  }

}
