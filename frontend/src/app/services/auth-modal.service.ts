/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-25 18:19:16
 * @modify date 2021-01-25 18:19:16
 * @desc [description]
 */
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthModalService {

  redirectUrl;
  constructor(private route: ActivatedRoute) {}

  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject(
    'close'
  );

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open(url) {
    this.redirectUrl = url || '/'
    this.display.next('open');
  }

  close() {
    this.display.next('close');
    this.redirectUrl = '';
  }
}
