/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 05:47:48
 * @modify date 2021-01-09 05:47:48
 * @desc [description]
 */
package com.online.giftshop.config;

import java.util.Arrays;

import com.online.giftshop.security.CustomAuthenticationEntryPoint;
import com.online.giftshop.security.JwtAuthorizationFilter;
import com.online.giftshop.security.JwtProvider;
import com.online.giftshop.services.implementation.JwtUserDetailsServiceImpl;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.web.cors.CorsConfiguration;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter  {
  
  private JwtUserDetailsServiceImpl userDetailsService;
  private BCryptPasswordEncoder passwordEncoder;
  private JwtProvider jwtProvider;

  @Override
  protected void configure(HttpSecurity http) throws Exception {
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
      .antMatchers("/register/**", "/auth/**" , "/h2/**", "/swagger*/**", "/v2/api-docs", "/social/**").permitAll()
      .antMatchers("/**").permitAll()
      // .antMatchers().permitAll()
      .anyRequest().authenticated()
      .and()
      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
      .and().exceptionHandling().authenticationEntryPoint(authenticationEntryPoint());
    // Works but need to make 2 calls
    // http.addFilter(new JwtAuthenticationFilter(authenticationManager(), authService));
    http.addFilter(new JwtAuthorizationFilter(authenticationManager(), jwtProvider, userDetailsService));
    http.headers().frameOptions().disable();
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
  }

  public AuthenticationEntryPoint authenticationEntryPoint() {
    return new CustomAuthenticationEntryPoint();
  }
}
