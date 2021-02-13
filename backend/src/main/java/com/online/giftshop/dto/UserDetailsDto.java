/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-19 23:19:40
 * @modify date 2021-01-19 23:19:40
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.Valid;
import javax.validation.constraints.Email;
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
public class UserDetailsDto {

  private Long userId;
  @Size(min = 5, max = 20)
  private String username;
  private String role;
  @Email
  private String emailId;
  @Size(min = 10, max = 10, message = "Length of phone number must be 10")
  private String phoneNo;
  // @Past
  // private LocalDate dob;
  @Valid
  private Address address;
  @Size(min = 5, max = 30)
  private String firstName;
  @Size(min = 5, max = 30)
  private String lastName;

}