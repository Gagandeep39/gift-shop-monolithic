/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-25 19:52:33
 * @modify date 2021-01-25 19:52:33
 * @desc [description]
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartConfirmModalService {
  constructor() {}

  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject(
    'close'
  );

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
