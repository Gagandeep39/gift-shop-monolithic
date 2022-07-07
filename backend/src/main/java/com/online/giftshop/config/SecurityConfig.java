/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 05:47:48
 * @modify date 2021-01-09 05:47:48
 * @desc [description]
 */
package com.online.giftshop.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import com.online.giftshop.security.CustomAuthenticationEntryPoint;
import com.online.giftshop.security.JwtAuthorizationFilter;
import com.online.giftshop.security.JwtProvider;
import com.online.giftshop.services.implementation.JwtUserDetailsServiceImpl;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Configuration
public class SecurityConfig {

  private JwtUserDetailsServiceImpl userDetailsService;
  private JwtProvider jwtProvider;
  private AuthenticationManager authenticationManager;

  @Bean
  protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        // Required when not using gateway
        .cors()
        .configurationSource(request -> {
          CorsConfiguration source = new CorsConfiguration();
          source.applyPermitDefaultValues();
          // .applyPermitDefaultValues(); only allows GET, HEAD, POST
          source.setAllowedMethods(Arrays.asList("GET", "HEAD", "POST", "DELETE", "PUT"));
          return source;
        }).and() // Required for accessing prpotected routes
        .csrf().disable()
        .authorizeRequests()
        .antMatchers("/register/**", "/auth/**", "/h2/**", "/swagger*/**", "/v2/api-docs", "/social/**").permitAll()
        .antMatchers("/**").permitAll()
        // .antMatchers().permitAll()
        .anyRequest().authenticated()
        .and()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and().exceptionHandling().authenticationEntryPoint(authenticationEntryPoint());

    http.addFilter(new JwtAuthorizationFilter(authenticationManager, jwtProvider, userDetailsService));
    http.headers().frameOptions().disable();
    return http.build();
  }

  public AuthenticationEntryPoint authenticationEntryPoint() {
    return new CustomAuthenticationEntryPoint();
  }
}
