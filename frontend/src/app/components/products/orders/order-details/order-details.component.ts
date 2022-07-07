import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  id: number;
  products;
  constructor(private orderservice: OrderService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.getOrderByOrderId();
  }

  getOrderByOrderId() {
    this.id = parseInt(sessionStorage.getItem('id'));
    this.orderservice.fetchById(this.id).subscribe((data) => {
      this.products = data;
    });
  }

  goBack() {
    this.location.back();
  }
}
