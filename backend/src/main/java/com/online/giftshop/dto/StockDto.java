/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 20:13:57
 * @modify date 2021-01-13 20:13:57
 * @desc [description]
 */
package com.online.giftshop.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class StockDto {

	@NotNull
	private Long productId;
	
	@NotNull
	@PositiveOrZero
	private Integer quantity;

}
