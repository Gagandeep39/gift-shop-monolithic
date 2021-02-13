/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 07:38:38
 * @modify date 2021-01-09 07:38:38
 * @desc [description]
 */
package com.online.giftshop.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.util.StringUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

  @Autowired
  public JwtAuthorizationFilter(AuthenticationManager authenticationManager, JwtProvider jwtProvider,
      UserDetailsService userDetailsService) {
    super(authenticationManager);
    this.jwtProvider = jwtProvider;
    this.userDetailsService = userDetailsService;
  }

  private JwtProvider jwtProvider;
  private UserDetailsService userDetailsService;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
      throws IOException, ServletException {
    try {
      String jwt = getJwtFromRequest((HttpServletRequest) request);
      if (StringUtils.hasText(jwt) && jwtProvider.validateToken(jwt)) {
        String username = jwtProvider.getUsernameFromJwt(jwt);
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        SecurityContextHolder.getContext().setAuthentication(
            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities()));
      }
    } catch (Exception e) {
      log.info(e.getMessage());
    }
    super.doFilterInternal(request, response, chain);
  }

  private String getJwtFromRequest(HttpServletRequest request) {
    String bearerToken = request.getHeader("Authorization");
    if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer"))
      return bearerToken.substring(7);
    return bearerToken;
  }
}
