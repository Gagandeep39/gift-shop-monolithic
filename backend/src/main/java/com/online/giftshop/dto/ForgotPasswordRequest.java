/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-14 18:18:29
 * @modify date 2021-01-14 18:18:29
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ForgotPasswordRequest {

  @NotBlank
  @Size(min = 5, max = 20)
  private String username;
  @NotBlank
  @Size(min = 5, max = 20)
  private String securityAnswer;
  @NotBlank
  @Size(min = 5, max = 20)
  private String newPassword;

}
