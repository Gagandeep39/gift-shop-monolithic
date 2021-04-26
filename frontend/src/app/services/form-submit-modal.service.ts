/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-05 22:31:03
 * @modify date 2021-02-05 22:31:03
 * @desc [description]
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormSubmitModalService {
  url: string;
  message: string;
  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject(
    'close'
  );

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open(message, url) {
    this.message = message;
    this.url = url;
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
