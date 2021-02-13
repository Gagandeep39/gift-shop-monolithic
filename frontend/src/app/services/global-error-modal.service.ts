/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 22:48:41
 * @modify date 2021-01-28 22:48:41
 * @desc [description]
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorModalService {

  error;

  constructor() {}

  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject(
    'close'
  );

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open(error) {
    this.error = error;
    this.display.next('open');
  }

  close() {
    this.error = null;
    this.display.next('close');
  }
}
