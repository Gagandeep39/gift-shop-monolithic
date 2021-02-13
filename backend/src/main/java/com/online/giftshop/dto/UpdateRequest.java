/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-19 23:21:18
 * @modify date 2021-01-19 23:21:18
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.online.giftshop.entities.Address;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateRequest {
  @NotNull
  private Long userId;
  @Size(min = 5, max = 20)
  @Email
  @NotBlank
  private String emailId;
  @NotBlank
  @Size(min = 10, max = 10, message = "Length of phone number must be 10")
  @Pattern(regexp = "(0|91)?[7-9][0-9]{9}", message = "Number should start with 7-9")
  private String phoneNo;
  // @Past
  // private LocalDate dob;
  @Valid
  private Address address;

  @Size(min = 10, max = 30)
  @NotBlank
  private String securityQuestion;
  @Size(min = 5, max = 10)
  @NotBlank
  private String securityAnswer;

  @Size(min = 5, max = 30)
  private String firstName;
  @Size(min = 5, max = 30)
  private String lastName;
}