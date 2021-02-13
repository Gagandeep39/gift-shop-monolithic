/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-21 12:49:26
 * @modify date 2021-01-21 12:49:26
 * @desc Used to execute events
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/category.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public resetPasswordData = new BehaviorSubject<any>(null);
  public loggedInUser = new BehaviorSubject<User>(null);
  public categoryChanged = new BehaviorSubject<String>(null);
  public searchQueryChanged = new BehaviorSubject<String>(null);

  constructor() { }
}
