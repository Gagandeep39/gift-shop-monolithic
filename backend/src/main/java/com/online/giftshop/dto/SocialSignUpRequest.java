/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-29 12:48:18
 * @modify date 2021-01-29 12:48:18
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.online.giftshop.entities.Address;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class SocialSignUpRequest {

  @NotBlank
  @Email
  private String emailId;
  @NotBlank
  @Size(min = 10, max = 10, message = "Length of phone number must be 10")
  @Pattern(regexp = "(0|91)?[7-9][0-9]{9}", message = "Number should start with 7-9")
  private String phoneNo;
  @Valid
  private Address address;
  @NotBlank
  @Size(min = 5, max = 30)
  private String firstName;
  @NotBlank
  @Size(min = 5, max = 30)
  private String lastName;

}
