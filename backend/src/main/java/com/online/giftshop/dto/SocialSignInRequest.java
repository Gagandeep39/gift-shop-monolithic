/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-29 10:54:45
 * @modify date 2021-01-29 10:54:45
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SocialSignInRequest {

  @NotBlank
  private String token;
  @NotBlank
  @Email
  private String email;

}
