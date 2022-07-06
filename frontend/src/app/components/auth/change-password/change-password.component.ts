/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-22 01:46:15
 * @modify date 2021-01-22 01:46:15
 * @desc [description]
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  resetPasswordForm: UntypedFormGroup;
  submitted = false;
  success = false;
  question = 'Not Found';
  resetPasswordSubscription: Subscription;

  constructor(
    private authService: AuthService,
    public loadingService: LoadingService,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnDestroy(): void {
    if (this.resetPasswordSubscription)
      this.resetPasswordSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initPasswordResetForm();
  }

  resetPassword() {
    this.submitted = true;
    console.log(this.resetPasswordForm.value);

    if (this.resetPasswordForm.valid)
      this.submitResetForm(this.resetPasswordForm.getRawValue());
  }

  submitResetForm(formData) {
    formData.username;
    this.loadingService.enableLoading();
    this.resetPasswordSubscription = this.authService
      .requestPasswordReset(formData)
      .subscribe(
        (response) => {
          this.success = true;
          setTimeout(() => {
            this.router.navigateByUrl('/auth/login');
          }, 3000);
          this.loadingService.disableLoading();
        },
        (error) => {
          this.loadingService.disableLoading();
          console.log(error);
          
          if (error.error.message === 'FieldException')
            error.error.errors.forEach((element) =>
              this.resetPasswordForm.controls[element.field]?.setErrors({
                serverValidationError: element.message,
              })
            );
          else throw new Error(error);
        }
      );
  }

  initPasswordResetForm() {
    const res = this.eventService.resetPasswordData.value;
    if (res === null) this.router.navigateByUrl('/auth/forgotpassword');
    this.question = res?.securityQuestion;
    this.resetPasswordForm = new UntypedFormGroup({
      username: new UntypedFormControl({ value: res?.username, disabled: true }, [
        Validators.required,
      ]),
      newPassword: new UntypedFormControl('', [Validators.required]),
      securityAnswer: new UntypedFormControl('', [Validators.required]),
    });
  }
}
