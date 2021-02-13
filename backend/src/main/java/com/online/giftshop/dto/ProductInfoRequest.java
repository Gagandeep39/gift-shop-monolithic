/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 20:15:21
 * @modify date 2021-01-13 20:15:21
 * @desc [description]
 */
package com.online.giftshop.dto;

import java.math.BigDecimal;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.PositiveOrZero;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class ProductInfoRequest {

  // Use this for performing validations

  @Min(100000)
  @Max(999999)
  private Long productId;

  @NotNull
  private String productName;

  @NotNull
  @DecimalMax(value = "9999.999")
  private BigDecimal productPrice;

  @NotNull
  @Pattern(regexp = "^\\d{0,3}$", message = "Enter a quantity between 1-999")
  private String productStock;

  @NotNull
  private String productDescription;

  @NotNull
  private String productIcon;

  @NotNull
  @Pattern(regexp = "^(ENABLED|DISABLED)$", message = "Status must be enabled or disabled")
  private String productStatus;

  @NotNull
  @Min(100000)
  @Max(999999)
  private Long categoryId;

  @NotNull
  @DecimalMax(value = "100")
  @PositiveOrZero
  private Double discountPercent;

}
