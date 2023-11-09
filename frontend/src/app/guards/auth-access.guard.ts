/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-29 14:12:31
 * @modify date 2021-01-29 14:12:31
 * @desc Prevents logged in user from accessing Auth pages
 */
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthAccessGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router)

  if (authService.isAuthenticated()) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};

