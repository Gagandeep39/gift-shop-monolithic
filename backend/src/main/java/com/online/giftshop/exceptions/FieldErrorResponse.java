/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 11:59:42
 * @modify date 2021-01-09 11:59:42
 * @desc [description]
 */
package com.online.giftshop.exceptions;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FieldErrorResponse {
  private String field;
  private String message;
}