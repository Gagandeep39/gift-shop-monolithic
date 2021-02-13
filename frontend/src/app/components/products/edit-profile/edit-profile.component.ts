/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-30 10:39:53
 * @modify date 2021-01-30 10:39:53
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsEdit } from 'src/app/models/user-details-edit';
import { LoadingService } from 'src/app/services/loading.service';
import { ManageUserService } from 'src/app/services/manage-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  submitted = false;
  updateUserForm: FormGroup;
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
    this.updateUserForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required]),
      securityQuestion: new FormControl('', [Validators.required]),
      securityAnswer: new FormControl('', [Validators.required]),
      address: new FormGroup({
        state: new FormControl('', [Validators.required]),
        area: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [
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
