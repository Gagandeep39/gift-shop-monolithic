/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-06 17:25:05
 * @modify date 2021-02-06 17:25:05
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { Address } from 'src/app/models/address.model';
import { Cart } from 'src/app/models/cart.model';
import { ProductInOrder } from 'src/app/models/product-in-order.model';
import { CartService } from 'src/app/services/cart.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ManageUserService } from 'src/app/services/manage-user.service';
import { PaymentRazorpayService } from 'src/app/services/payment-razorpay.service';
import { PaymentStripeService } from 'src/app/services/payment-stripe.service';
import { environment } from 'src/environments/environment';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  address: Address;
  deliveryCharge: number;
  totalAfterDiscount: number;
  totalBeforeDiscount: number;
  finalTotal: number;
  user;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService,
    private manageUserService: ManageUserService,
    private ngZone: NgZone,
    private razorpayService: PaymentRazorpayService,
    public loadingService: LoadingService,
    private paymentStripeService: PaymentStripeService
  ) {}

  ngOnInit(): void {
    this.initDeliveryData();
    this.fetchCartData();
    this.fetchUserData();
  }
  fetchUserData() {
    this.manageUserService
      .fetchLoggedInUserForEdit()
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log(res);

          this.user = res;
        },
      });
  }
  fetchCartData() {
    this.cartService
      .fetchCartByUserId()
      .pipe(take(1))
      .subscribe({
        next: (res: Cart) => this.calculateOrderSummary(res.products),
      });
  }

  initDeliveryData() {
    this.route.paramMap
      .pipe(
        map(() => window.history.state),
        take(1),
        tap((res) =>
          res?.address ? res : this.router.navigateByUrl('/products/checkout')
        )
      )
      .subscribe((res) => {
        this.deliveryCharge = res?.deliveryCharge;
        this.address = res?.address;
      });
  }

  goBack() {
    this.location.back();
  }

  calculateOrderSummary(productsInOrder: ProductInOrder[]) {
    console.log(productsInOrder);

    let discountPrice = 0;
    let totalBeforeDiscount = 0;
    let finalTotal;
    for (const key in productsInOrder) {
      console.log(productsInOrder[key]);
      totalBeforeDiscount += productsInOrder[key].productPrice;
      if (productsInOrder[key].discountPercent === 0)
        discountPrice = productsInOrder[key].productPrice;
      else discountPrice += this.calculatePrice(productsInOrder[key]);
    }
    this.totalBeforeDiscount = totalBeforeDiscount;

    this.totalAfterDiscount = discountPrice;
    finalTotal = this.totalAfterDiscount + this.deliveryCharge;

    this.finalTotal = finalTotal;
  }

  calculatePrice(currentProduct: ProductInOrder) {
    return (
      currentProduct.productPrice -
      currentProduct.productPrice * 0.01 * currentProduct.discountPercent
    );
  }

  checkOutInServer(res) {
    this.loadingService.enableLoading();
    const data = {
      ...this.address,
      deliveryCharge: this.deliveryCharge,
      paymentId: res.paymentId,
    };
    this.cartService.checkout(data).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/products/checkout/success', res['orderId']]);
      },
      complete: () => this.loadingService.disableLoading(),
    });
  }

  // Stripe Pay

  payWithStripe() {
    this.loadingService.enableLoading();
    this.paymentStripeService.pay(this.finalTotal);
    this.paymentStripeService.paymentComplete.subscribe({
      next: (res) => {
        this.loadingService.disableLoading()
        this.checkOutInServer(res);
      }
    });
  }

  // RAZOR PAY Methods

  rzp1;
  options;
  order;

  payWithRazorpay() {
    this.loadingService.enableLoading();
    this.razorpayService
      .generateOrderId(this.finalTotal * 100)
      .pipe(take(1))
      .subscribe({
        next: (res) => this.setOption(res),
        error: (error) => console.log(error),
        complete: () => this.loadingService.disableLoading(),
      });
  }
  initRazorPay() {
    const rzp1 = new Razorpay(this.options);
    rzp1.open();
  }

  setOption(data: Object) {
    this.options = {
      key: environment.publicRazorpayKey, // Enter the Key ID generated from the Dashboard
      // amount: 12100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Gift Shop',
      description: 'Test Transaction',
      image: 'https://i.imgur.com/OEzo9pz.png',
      order_id: data['order_id'],
      handler: (response) =>
        this.ngZone.run(() =>
          this.updatePaymentInServer(response.razorpay_payment_id)
        ),
      prefill: {
        name: this.user?.firstName + this.user?.lastName,
        email: this.user?.emailId,
        contact: this.user?.phoneNo,
      },
      notes: {
        address: 'Gift Shop office',
      },
      theme: {
        color: '#1f9db9',
      },
    };
    this.initRazorPay();
  }
  updatePaymentInServer(razorId) {
    this.loadingService.enableLoading();
    const name = this.user['firstName'] + this.user['lastName'];
    const amount = this.finalTotal;
    this.razorpayService
      .updatePaymentInDb({ razorId, amount, name })
      .subscribe({
        next: (res) => this.checkOutInServer(res),
        complete: () => this.loadingService.disableLoading(),
      });
  }
}
