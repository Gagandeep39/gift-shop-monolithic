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
import { SocialAuthService } from 'src/app/services/social-auth.service';
import { environment } from 'src/environments/environment';

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
    private socialAuthService: SocialAuthService,
    private ngZone: NgZone
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

  // Google sign in
  auth2;
  logo = '/assets/images/btn_google_light_normal.svg';

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.googleClientId,
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) =>
      this.ngZone.run(
        () => {
          console.log(googleUser);
          this.loadingService.enableLoading();
          this.socialAuthService
            .validateGoogleTokenAndLogin({
              token: googleUser.getAuthResponse().id_token,
              email: googleUser.getBasicProfile().getEmail(),
            })
            .subscribe((res) => {
              this.loadingService.disableLoading();
              if (res['status'] !== 202)
                this.router.navigateByUrl(this.returnUrl);
              else {
                this.router.navigate(['/socialregister'], {
                  state: {
                    data: { emailId: googleUser.getBasicProfile().getEmail() },
                  },
                });
              }
            }).closed;
        },
        (error) => console.log(error)
      )
    );
  }

  ngAfterViewInit() {
    this.googleInit();
    this.facebookInit();
  }

  facebookInit() {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: environment.facebookClientId,
        cookie: true,
        xfbml: true,
        version: 'v3.1',
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  submitLogin() {
    FB.login((response) =>
      this.ngZone.run(() => {
        if (response.authResponse) {
          FB.api('/me', { fields: 'name, email' }, (res) => {
            console.log(res);
            console.log(response);

            this.loadingService.enableLoading();
            this.socialAuthService
              .validateFacebookTokenAndLogin({
                token: response.authResponse.accessToken,
                email: res.email,
              })
              .subscribe((res) => {
                this.loadingService.disableLoading();
                if (res['status'] !== 202)
                  this.router.navigateByUrl(this.returnUrl);
                else {
                  this.router.navigate(['/socialregister'], {
                    state: {
                      data: { emailId: response.email },
                    },
                  });
                }
              }).closed;
          });
        } else throw Error('Error Signing from facebook');
      })
    );
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
