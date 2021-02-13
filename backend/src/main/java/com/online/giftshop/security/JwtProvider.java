/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 06:30:56
 * @modify date 2021-01-09 06:30:56
 * @desc [description]
 */
package com.online.giftshop.security;

import java.time.Instant;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtProvider {

  @Value("${jwt.expiration}")
  private Long jwtExpirationInMillis;

  @Value("${jwt.secret}")
  private String secret;

  @Autowired
  private SecretKey secretKey;

  SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

  /**
   * Check token validity
   */
  public boolean validateToken(String jwt) {
    Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(jwt);
    return true;
  }

  /**
   * Feth username from JWT
   */
  public String getUsernameFromJwt(String token) {
    Claims claims = Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody();
    return claims.getSubject();
  }

  /**
   * Generate token based on username
   * @param username User for which toke is to be generated
   * @return Token
   */
  public String generateTokenWithUsername(String username) {
    return Jwts.builder()
      .setSubject(username)
      .setIssuedAt(Date.from(Instant.now()))
      .signWith(secretKey, signatureAlgorithm)
      .setExpiration(Date.from(Instant.now().plusMillis(jwtExpirationInMillis))).compact();
  }

  @Bean
  public SecretKey getSecretKey () {
    return Keys.hmacShaKeyFor(secret.getBytes());
  }

  public String generateWithUsernameAndId(String username, Long id) {
    return Jwts.builder()
      .setSubject(username)
      .claim("userId", id)
      .setIssuedAt(Date.from(Instant.now()))
      .signWith(secretKey, signatureAlgorithm)
      .setExpiration(Date.from(Instant.now().plusMillis(jwtExpirationInMillis))).compact();
  }

  public Integer getIdFromJwt(String token) {
    Claims claims = Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody();
    return claims.get("userId", Integer.class);
  }

}