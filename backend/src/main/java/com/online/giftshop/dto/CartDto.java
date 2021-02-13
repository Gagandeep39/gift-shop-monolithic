package com.online.giftshop.dto;

import java.util.List;

import javax.validation.Valid;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartDto {

	// private int userId;

	@Valid
	private List<ItemDto> itemDtoList;

}
