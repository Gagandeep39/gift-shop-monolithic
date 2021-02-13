/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-21 12:48:30
 * @modify date 2021-01-21 12:48:30
 * @desc [description]
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { EventService } from './event.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authServiceUrl = `${environment.protocol}${environment.applicationUrl}/auth`;
  // authServiceUrl = `http://localhost:9100/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private eventServie: EventService
  ) {}

  login(formData) {
    return this.http
      .post(`${this.authServiceUrl}/login`, formData)
      .pipe(tap((user: User) => {
        this.saveToSessionStorage(user);
        this.eventServie.loggedInUser.next(user);
      }));
  }

  saveToSessionStorage(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  fetchFromSessionStorage(): User {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.eventServie.loggedInUser.next(null);
    this.router.navigate(['/']);
  }

  redirectIfLoggedIn() {
    if (this.fetchFromSessionStorage()?.token)
      this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    const token = this.fetchFromSessionStorage()?.token;
    return !this.jwtHelper.isTokenExpired(token);
  }

  requestSecretQuestion (username) {
    return this.http.get(`${this.authServiceUrl}/forgotpassword/${username}`);
  }

  requestPasswordReset (formData) {
    return this.http.put(`${this.authServiceUrl}/forgotpassword`, formData);
  }

  getRole() {
    return this.fetchFromSessionStorage()?.role;
  }
}
