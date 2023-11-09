/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-25 14:49:14
 * @modify date 2021-01-25 14:49:14
 * @desc Prevents access to pages if user oesnt have the correc trole. Example Admin
 */
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AccessDeniedModalService } from '../services/access-denied-modal.service';
import { AuthService } from '../services/auth.service';

export const RoleGuard = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const accessDeniedModal = inject(AccessDeniedModalService);
  console.log(authService);
  console.log(route);
  
  if (authService.isAuthenticated()) {
    const userRole = authService.getRole();
    if (route.data.role && route.data.role.indexOf(userRole) === -1) {
      accessDeniedModal.open();
      return false;
    }
    return true;
  }
  return false;
};

