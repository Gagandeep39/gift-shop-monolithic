/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 13:26:03
 * @modify date 2021-01-28 13:26:03
 * @desc [description]
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentRazorpayService {
  paymentServiceUrl = `${environment.protocol}${environment.applicationUrl}/payment`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  generateOrderId(amount) {
    let params = new HttpParams()
      .set('CUST_ID', this.authService.fetchFromSessionStorage().username)
      .set('TXN_AMOUNT', amount.toString());
    return this.http.get(`${this.paymentServiceUrl}/razorpayorder`, {
      params,
    });
  }

  updatePaymentInDb(data) {
    return this.http.post(`${this.paymentServiceUrl}/razorsuccess`, data);
  }
}
