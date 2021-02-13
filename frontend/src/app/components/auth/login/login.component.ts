/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-22 01:46:26
 * @modify date 2021-01-22 01:46:26
 * @desc [description]
 */
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
declare const gapi: any;
declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginSubscription: Subscription;
  returnUrl;
  googleLogin;

  constructor(
    private authService: AuthService,
    private router: Router,
    public loadingService: LoadingService,
    private route: ActivatedRoute,
  ) {}

  ngOnDestroy(): void {
    if (this.loginSubscription) this.loginSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.authService.redirectIfLoggedIn();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.initForm();
    (window as any).googleLogin = this.googleLogin;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) this.submitData(this.loginForm.value);
  }

  submitData(formData: any) {
    this.loadingService.enableLoading();
    this.loginSubscription = this.authService.login(formData).subscribe(
      (response) => {
        this.router.navigateByUrl(this.returnUrl);
        this.loadingService.disableLoading();
      },
      (error) => {
        this.loadingService.disableLoading();
        if (error.error.message === 'FieldException')
          error.error.errors.forEach((element) =>
            this.loginForm.controls[element.field]?.setErrors({
              serverValidationError: element.message,
            })
          );
        else throw new Error(error);
      }
    );
  }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit() {
  }

}

/**
 * Fetch Other google sign in info
 * 
  let profile = googleUser.getBasicProfile();
  console.log('Token || ' + googleUser.getAuthResponse().id_token);
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
 */
