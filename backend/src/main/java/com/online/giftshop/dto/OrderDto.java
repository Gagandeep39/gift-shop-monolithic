/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-27 02:14:42
 * @modify date 2021-01-27 02:14:42
 * @desc [description]
 */
package com.online.giftshop.dto;

import java.math.BigDecimal;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDto {

  @NotBlank
  @Size(min = 6, max = 6, message = "Must be 6 digits only")
  private String pincode;
  @NotBlank
  private String city;
  @NotBlank
  private String state;
  @NotBlank
  private String area;
  @NotNull
  @DecimalMax("9999")
  @DecimalMin("0")
  private BigDecimal deliveryCharge;

  @NotNull
  private Long paymentId;
}
