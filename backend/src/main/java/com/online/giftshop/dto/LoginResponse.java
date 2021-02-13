/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 05:21:12
 * @modify date 2021-01-09 05:21:12
 * @desc [description]
 */
package com.online.giftshop.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class LoginResponse {

  private Long userId;
  private String token;
  private String role;
  private String username;

}