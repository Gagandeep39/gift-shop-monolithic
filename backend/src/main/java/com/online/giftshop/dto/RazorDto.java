/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 12:09:10
 * @modify date 2021-01-28 12:09:10
 * @desc [description]
 */
package com.online.giftshop.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RazorDto {

  private String razorId;
  private Double amount;
  private String name;

}
