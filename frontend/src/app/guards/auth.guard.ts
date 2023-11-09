import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthModalService } from '../services/auth-modal.service';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(
    private authServie: AuthService,
    private router: Router,
    private modalAuthService: AuthModalService,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authServie.isAuthenticated()) {
      this.modalAuthService.open(state.url);
      // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    return true;
  }
}
