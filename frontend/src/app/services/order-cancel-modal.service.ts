import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderCancelModalService {

  constructor() {}

  private display: BehaviorSubject<'open' | 'close' | 'cancel-order'> = new BehaviorSubject(
    'close'
  );

  watch(): Observable<'open' | 'close' | 'cancel-order'> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }

  cancelOrder() {
    this.display.next('cancel-order');
  }
}
