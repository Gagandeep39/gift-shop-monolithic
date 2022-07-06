/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-22 01:46:20
 * @modify date 2021-01-22 01:46:20
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
  selector: 'app-request-question',
  templateUrl: './request-question.component.html',
  styleUrls: ['./request-question.component.scss'],
})
export class RequestQuestionComponent implements OnInit, OnDestroy {
  requestQuestionForm: UntypedFormGroup;
  formSubscription: Subscription;
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public loadingService: LoadingService,
    private eventService: EventService
  ) {}

  ngOnDestroy(): void {
    if (this.formSubscription) this.formSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initQuestionForm();
  }

  requestSecretQuestion() {
    this.submitted = true;
    if (this.requestQuestionForm.valid)
      this.submitData(this.requestQuestionForm.value.username);
  }

  submitData(formData) {
    this.loadingService.enableLoading();
    this.formSubscription = this.authService
      .requestSecretQuestion(formData)
      .subscribe(
        (response) => {
          this.loadingService.disableLoading();
          this.eventService.resetPasswordData.next(response);
          this.router.navigateByUrl('/auth/changepassword');
        },
        (error) => {
          this.loadingService.disableLoading();
          if (error.error.message === 'FieldException')
            error.error.errors.forEach((element) =>
              this.requestQuestionForm.controls[element.field]?.setErrors({
                serverValidationError: element.message,
              })
            );
          else throw new Error(error);
        }
      );
  }

  initQuestionForm() {
    this.requestQuestionForm = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required]),
    });
  }
}
