/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-27 01:13:57
 * @modify date 2021-01-27 01:13:57
 * @desc [description]
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {

  applicationUrl = `${environment.mapQuestUrl}?key=${environment.mapQuestAPIKey}&`;
  constructor(private http: HttpClient) {}

  fetchDistance(to) {
    // return this.http.get(this.generateUrl(environment.from, to));
    return this.http.get(`${this.applicationUrl}from=${environment.from}&to=${to}`, {headers:{skip:"true"}})
  }

}
