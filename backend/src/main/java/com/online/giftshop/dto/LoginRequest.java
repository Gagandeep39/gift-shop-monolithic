/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 05:21:16
 * @modify date 2021-01-09 05:21:16
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {
  @NotBlank
  @Size(min = 5, max = 50)
  private String username;
  @NotBlank
  @Size(min = 5, max = 50)
  private String password;
}