import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { SocialAuthService } from 'src/app/services/social-auth.service';

@Component({
  selector: 'app-social-register',
  templateUrl: './social-register.component.html',
  styleUrls: ['./social-register.component.css'],
})
export class SocialRegisterComponent implements OnInit {
  email;

  submitted = false;
  userForm: FormGroup;
  addUserSubscription: Subscription;
  message = null;
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 14))
    .toISOString()
    .slice(0, 10);
  // new Date().toISOString().slice(0,10) - ;

  constructor(
    private socialAuthService: SocialAuthService,
    public loadingService: LoadingService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.email = window.history.state?.data?.emailId
    if (!this.email) this.router.navigateByUrl('/login')
    this.initForm();
  }

  submitForm() {
    this.submitted = true;
    if (this.userForm.valid) this.addUser(this.userForm.value);
  }

  addUser(formData) {
    console.log(formData);
    
    this.loadingService.enableLoading();
    this.addUserSubscription = this.socialAuthService
      .socialSignUp(formData)
      .subscribe(
        (response) => {
          this.loadingService.disableLoading();
          this.message =
            'Successfully Added user with ID ' + response['userId'];
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 3000);
        },
        (error) => {
          console.log(error);
          this.loadingService.disableLoading();
          if (error.error.message === 'FieldException')
            error.error.errors.forEach((element) =>
              this.userForm.controls[element.field]?.setErrors({
                serverValidationError: element.message,
              })
            );
          else throw new Error(error);
        }
      );
  }

  initForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required]),
      emailId: new FormControl(this.email, [Validators.required]),
      address: new FormGroup({
        state: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ]),
        area: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ]),
        pincode: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{6}'),
        ]),
      }),
    });
  }
}
