/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 00:33:13
 * @modify date 2021-01-28 00:33:13
 * @desc [description]
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentStripeService {
  paymentServiceUrl = `${environment.protocol}${environment.applicationUrl}/payment`;
  paymentComplete = new Subject();
  constructor(private http: HttpClient) {}

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(s);
    }
  }

  // Predefined UI
  pay(amount) {
    var handler = window.StripeCheckout.configure({
      key: environment.publicStripeKey,
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        this.chargeCard(token.id, amount);
      },
    });

    handler.open({
      name: 'Gift Shop',
      description:
        'Online Gift Shopping application to purchse and share happiness',
      amount: amount * 100,
      currency: 'INR',
    });
  }

  chargeCard(token: string, amount: number) {
    // const headers = new HttpHeaders()
    let headers = new HttpHeaders().set('token', token); // create header object
    headers = headers.append('amount', amount.toString()); // add a new header, creating a new object
    console.log(headers);

    this.http
      .post(`${this.paymentServiceUrl}/charge`, {}, { headers })
      .subscribe((resp) => {
        this.paymentComplete.next(resp);
      });
  }
}
