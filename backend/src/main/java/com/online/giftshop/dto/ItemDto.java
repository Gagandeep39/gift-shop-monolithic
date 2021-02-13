/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-20 13:07:24
 * @modify date 2021-01-20 13:07:24
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ItemDto {

	@NotNull
	private Long productId;
	@PositiveOrZero
	@NotNull
	private int quantity;

}
