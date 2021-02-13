import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderCancelModalService } from 'src/app/services/order-cancel-modal.service';

@Component({
  selector: 'app-order-cancel-modal',
  templateUrl: './order-cancel-modal.component.html',
  styleUrls: ['./order-cancel-modal.component.css']
})
export class OrderCancelModalComponent implements OnInit {

  display$: Observable<'open' | 'close' | 'cancel-order'>;

  constructor(
    private modalService: OrderCancelModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  triggerCancelOrder() {
    this.modalService.cancelOrder();
  }
}
