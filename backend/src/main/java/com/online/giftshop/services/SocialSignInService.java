/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-29 12:51:03
 * @modify date 2021-01-29 12:51:03
 * @desc [description]
 */
package com.online.giftshop.services;

import com.online.giftshop.dto.LoginResponse;
import com.online.giftshop.dto.SocialSignInRequest;
import com.online.giftshop.dto.SocialSignUpRequest;

public interface SocialSignInService {

  LoginResponse signInWithGoogle(SocialSignInRequest request);

  LoginResponse signInWithFacebook(SocialSignInRequest request);

  LoginResponse socialSignUp(SocialSignUpRequest request);

}
