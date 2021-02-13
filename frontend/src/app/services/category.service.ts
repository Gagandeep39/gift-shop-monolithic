/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-25 11:02:43
 * @modify date 2021-01-25 11:02:43
 * @desc [description]
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryServiceUrl = `${environment.protocol}${environment.applicationUrl}/categories`;

  constructor(private http: HttpClient) {}

  fetchAllCategories() {
    return this.http.get(this.categoryServiceUrl);
  }

  updateCategory(data) {
    return this.http.put(this.categoryServiceUrl, data);
  }

  createCategory(data) {
    return this.http.post(this.categoryServiceUrl, data);
  }

  fetchById(id) {
    return this.http.get(`${this.categoryServiceUrl}/${id}`);
  }
}
