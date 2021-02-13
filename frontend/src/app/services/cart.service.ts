/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-27 02:57:17
 * @modify date 2021-01-27 02:57:17
 * @desc [description]
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartServiceUrl = `${environment.protocol}${environment.applicationUrl}/cart`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  addToCart(item: Item) {
    return this.http.put(`${this.cartServiceUrl}/${this.authService.fetchFromSessionStorage()?.userId}`, item);
  }

  fetchCartByUserId() {
    return this.http.get(`${this.cartServiceUrl}/user/${this.authService.fetchFromSessionStorage()?.userId}`);
  }

  removeItemFromCart(productId) {
    return this.http.delete(`${this.cartServiceUrl}/delete/${productId}/${this.authService.fetchFromSessionStorage()?.userId}`)
  }

  checkout(data) {
    return this.http.post(`${this.cartServiceUrl}/manualcheckout/${this.authService.fetchFromSessionStorage()?.userId}`, data)
  }
}
