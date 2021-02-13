/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-14 01:03:51
 * @modify date 2021-01-14 01:03:51
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateStatusDto {
  private Long orderId;

  @NotNull
  @Pattern(regexp = "^(DELIVERED|CANCELLED|OUT_FOR_DELIVERY|DISPATCHED)$", message = "Invalid Order Status")
  private String status;

}
