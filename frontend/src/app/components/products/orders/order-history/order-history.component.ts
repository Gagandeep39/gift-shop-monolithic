import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

declare global {
  interface Window {
    StripeCheckout: any;
  }
}

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  orderId1: number;
  order;

  constructor(
    private orderservice: OrderService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  onSave(orderId: number) {
    this.orderId1 = orderId;
    sessionStorage.setItem('id', orderId.toString());
    this.router.navigate(['/products/orders', this.orderId1]);
  }

  getOrders() {
    this.orderservice.fetchOrder().subscribe((data: Object[]) => {
      this.order = data.filter((o) => o['userId'] === this.authService.fetchFromSessionStorage()?.userId);
    });
  }
}
