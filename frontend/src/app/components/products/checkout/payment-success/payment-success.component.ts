import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { DeliveryHistory } from 'src/app/models/delivery-history.model';
import { DeliveryHistoryService } from 'src/app/services/delivery-history.service';
import { LoadingService } from 'src/app/services/loading.service';
import { OrderCancelModalService } from 'src/app/services/order-cancel-modal.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
})
export class PaymentSuccessComponent implements OnInit {

  orderId;
  orderDetails;
  deliveryHistory: DeliveryHistory[];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private location: Location,
    public loadingService: LoadingService,
    private deliveryHistoryService: DeliveryHistoryService,
    private orderCancelModal: OrderCancelModalService,
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['orderId'];
    this.fetchOrderDetails(this.orderId);
    this.fetchDeliveryDetails(this.orderId);
  }

  fetchDeliveryDetails(id) {
    this.deliveryHistoryService
      .fetchDeliveryByOrderId(id)
      .pipe(take(1))
      .subscribe((res: DeliveryHistory[]) => (this.deliveryHistory = res));
  }

  fetchOrderDetails(id) {
    this.orderService
      .fetchById(id)
      .pipe(take(1))
      .pipe(
        tap((res) => {
          console.log(res);
          return res;
        })
      )
      .subscribe((res) => (this.orderDetails = res));
  }

  goBack() {
    this.location.back();
  }

  formattedDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  cancelOrder() {
    this.orderCancelModal.open();
    this.orderCancelModal.watch().subscribe((res) => {
      this.loadingService.enableLoading();
      if (res !== 'cancel-order') this.loadingService.disableLoading();
      else
        this.orderService
          .updateOrderStatus({
            orderId: this.orderDetails?.orderId,
            status: 'CANCELLED',
          })
          .subscribe((res) => {
            console.log(res);
            this.fetchDeliveryDetails(this.orderDetails?.orderId);
          });
    });
  }

  checkIfCancellable() {
    return (
      this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'DELIVERED' && this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'CANCELLED'
    );
  }
}
