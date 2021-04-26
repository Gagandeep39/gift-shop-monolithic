/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-06 14:41:20
 * @modify date 2021-02-06 14:41:20
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ManageUserService } from 'src/app/services/manage-user.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css'],
})
export class ShippingDetailsComponent implements OnInit {
  submitted;
  addressForm: FormGroup;
  deliveryCharge: number;
  address;
  error;

  constructor(
    private manageUserService: ManageUserService,
    private geolocationService: GeolocationService,
    private authService: AuthService,
    public loadingService: LoadingService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.initAddressForm();
    this.populateAddress();
  }

  populateAddress() {
    this.manageUserService
      .fetchById(this.authService.fetchFromSessionStorage()?.userId)
      .subscribe((user) => {
        this.address = user['address'];
        this.populateFormFields(this.address);
        this.calculateDistance();
      });
  }

  calculateDistance() {
    this.loadingService.enableLoading();
    this.geolocationService
      .fetchDistance(this.addressForm.value.pincode)
      .subscribe({
        next: (res) => this.handleApiResponse(res),
        error: (error) => console.log(error),
        complete: () => this.loadingService.disableLoading(),
      });
  }

  handleApiResponse(res: Object): void {
    if (res['info'].statuscode !== 0) {
      this.error = 'error';
      this.addressForm.controls.pincode.setErrors({
        serverValidationError: 'Delivery not available at given location',
      });
    } else {
      this.error = null;
      console.log(res['route'].distance);
      this.calculateDeliveryCharge(res['route'].distance);
      this.redirectIfFormValidAndSubmitted();
    }
  }

  redirectIfFormValidAndSubmitted() {
    if (this.addressForm.valid && this.error === null && this.submitted)
      this.navigateToPayment(this.addressForm);
  }

  populateFormFields(address) {
    this.addressForm.patchValue({
      city: address.city,
      state: address?.state,
      pincode: address?.pincode,
      area: address?.area,
    });
  }

  calculateDeliveryCharge(distance) {
    if (distance <= 5) this.deliveryCharge = 50;
    else if (distance <= 25) this.deliveryCharge = 100;
    else if (distance <= 50) this.deliveryCharge = 200;
    else if (distance <= 100) this.deliveryCharge = 300;
    else if (distance <= 200) this.deliveryCharge = 400;
    else this.deliveryCharge = 500;
  }

  initAddressForm() {
    this.addressForm = new FormGroup({
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
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.addressForm.value);
    // Form submitted after handling server response
    this.calculateDistance();
  }
  navigateToPayment(addressForm: FormGroup) {
    this.router.navigate(['/products/checkout/payment'], {
      state: {
        address: {
          city: addressForm.value?.city,
          state: addressForm.value?.state,
          area: addressForm.value?.area,
          pincode: addressForm.value?.pincode,
        },
        deliveryCharge: this.deliveryCharge,
      },
    });
  }

  resetToDefault() {
    this.populateFormFields(this.address);
  }

  goBack() {
    this.location.back();
  }
}
