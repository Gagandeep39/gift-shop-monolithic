/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 11:59:11
 * @modify date 2021-01-09 11:59:11
 * @desc [description]
 */
package com.online.giftshop.exceptions;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ErrorResponse {

	private int status;
	private String message;
	private long timeStamp;
	private List<FieldErrorResponse> errors;
}