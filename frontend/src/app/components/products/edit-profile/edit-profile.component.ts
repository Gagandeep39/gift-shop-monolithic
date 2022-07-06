/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-30 10:39:53
 * @modify date 2021-01-30 10:39:53
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsEdit } from 'src/app/models/user-details-edit';
import { LoadingService } from 'src/app/services/loading.service';
import { ManageUserService } from 'src/app/services/manage-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  submitted = false;
  updateUserForm: UntypedFormGroup;
  message;
  userDetailsEdit: UserDetailsEdit;

  constructor(
    public loadingService: LoadingService,
    private location: Location,
    private router: Router,
    private manageUserService: ManageUserService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fetchData();
  }
  fetchData() {
    this.manageUserService
      .fetchLoggedInUserForEdit()
      .subscribe((res: UserDetailsEdit) => {
        this.userDetailsEdit = res;
        this.populateFormFields(res);
      });
  }
  initForm() {
    this.updateUserForm = new UntypedFormGroup({
      userId: new UntypedFormControl('', [Validators.required]),
      firstName: new UntypedFormControl('', [Validators.required]),
      lastName: new UntypedFormControl('', [Validators.required]),
      emailId: new UntypedFormControl('', [Validators.required]),
      phoneNo: new UntypedFormControl('', [Validators.required]),
      securityQuestion: new UntypedFormControl('', [Validators.required]),
      securityAnswer: new UntypedFormControl('', [Validators.required]),
      address: new UntypedFormGroup({
        state: new UntypedFormControl('', [Validators.required]),
        area: new UntypedFormControl('', [Validators.required]),
        city: new UntypedFormControl('', [Validators.required]),
        pincode: new UntypedFormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{6}'),
        ]),
      }),
    });
  }

  populateFormFields(userDetails: UserDetailsEdit) {
    this.updateUserForm.patchValue({
      userId: userDetails?.userId,
      firstName: userDetails?.firstName,
      lastName: userDetails?.lastName,
      emailId: userDetails?.emailId,
      phoneNo: userDetails?.phoneNo,
      securityQuestion: userDetails?.securityQuestion,
      securityAnswer: userDetails?.securityAnswer,
      address: {
        state: userDetails?.address?.state,
        area: userDetails?.address?.area,
        city: userDetails?.address?.city,
        pincode: userDetails?.address?.pincode,
      },
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.updateUserForm.valid) this.submitData(this.updateUserForm.value);
  }
  submitData(formData: any) {
    this.loadingService.enableLoading();
    this.manageUserService.updateLoggedInUser(formData).subscribe(
      (response) => {
        this.loadingService.disableLoading();
        this.message = 'Successfully updated Your profile';
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 3000);
      },
      (error) => {
        this.loadingService.disableLoading();
        if (error?.error?.message === 'FieldException')
          error.error.errors.forEach((element) =>
            this.updateUserForm.controls[element.field]?.setErrors({
              serverValidationError: element.message,
            })
          );
        else throw new Error(error);
      }
    );
  }

  resetToDefault() {
    this.populateFormFields(this.userDetailsEdit);
  }

  goBack() {
    this.location.back();
  }
}
