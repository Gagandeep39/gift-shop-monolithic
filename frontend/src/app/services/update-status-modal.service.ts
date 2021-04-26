/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-05 18:42:15
 * @modify date 2021-02-05 18:42:15
 * @desc [description]
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateStatusModalService {
  product;
  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject(
    'close'
  );

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open(product) {
    this.product = product;
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
