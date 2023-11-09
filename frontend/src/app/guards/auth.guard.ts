/**
 * Prevents certain pages to be accessed when user is not logged in
 */
import { inject } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { AuthModalService } from '../services/auth-modal.service';
import { AuthService } from '../services/auth.service';

export const AuthGuard = (state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const authModalService = inject(AuthModalService);

  if (!authService.isAuthenticated()) {
    authModalService.open(state.url);
    return false
  }
  return true;
};

