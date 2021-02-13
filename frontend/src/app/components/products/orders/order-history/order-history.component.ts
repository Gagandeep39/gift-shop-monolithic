import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

declare global {
  interface Window {
    StripeCheckout: any;
  }
}

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  orderId1: number;
  order;

  constructor(private orderservice: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.getOrders();
  }

  onSave(orderId: number) {
    this.orderId1 = orderId;
    console.log(orderId);

    //localStorage.setItem("id", this.orderId1);
    sessionStorage.setItem('id', orderId.toString());
    console.log(sessionStorage.getItem('id'));
    this.router.navigate(['/products/orders', this.orderId1]);
  }

  getOrders() {
    console.log('before call');
    this.orderservice.fetchOrder().subscribe((data) => {
      this.order = data;
      //alert("Orders in your cart");
    });
  }
}
