/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 05:42:46
 * @modify date 2021-01-09 05:42:46
 * @desc [description]
 */
package com.online.giftshop.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class InvalidCredentialException extends RuntimeException {

  private static final long serialVersionUID = 1L;
  private String errorName;
  private String errorDescription;

}