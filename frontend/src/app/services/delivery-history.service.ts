/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-26 11:23:10
 * @modify date 2021-01-26 11:23:10
 * @desc [description]
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeliveryHistoryService {
  orderServiceUrl = `${environment.protocol}${environment.applicationUrl}/delivery`;

  constructor(private http: HttpClient) {}

  fetchDeliveryByOrderId(orderId) {
    return this.http.get(`${this.orderServiceUrl}/${orderId}`);
  }
}
