/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-25 11:17:01
 * @modify date 2021-01-25 11:17:01
 * @desc [description]
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productServiceUrl = `${environment.protocol}${environment.applicationUrl}/products`;

  constructor(private http: HttpClient) {}

  fetchAllProducts() {
    return this.http.get(this.productServiceUrl);
  }

  findByName(name) {
    return this.http.get(`${this.productServiceUrl}/name/${name}`);
  }

  findByCategory(category) {
    return this.http.get(`${this.productServiceUrl}/category/${category}`);
  }

  fetchById(productId) {
    return this.http.get(`${this.productServiceUrl}/${productId}`);
  }

  addProduct(product) {
    return this.http.post(`${this.productServiceUrl}`, product);
  }

  deleteProduct(productId) {
    return this.http.delete(`${this.productServiceUrl}/${productId}`);
  }

  updateProduct(product) {
    return this.http.put(`${this.productServiceUrl}`, product);
  }

}
