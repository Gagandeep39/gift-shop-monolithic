/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-13 22:52:54
 * @modify date 2021-02-13 22:52:54
 * @desc [description]
 */
package com.online.giftshop.exceptions;

public class UserNotFoundException extends RuntimeException {

  private static final long serialVersionUID = 5512565657286379434L;

  public UserNotFoundException() {
    super();
  }

  public UserNotFoundException(String message) {
    super(message);
  }

}
