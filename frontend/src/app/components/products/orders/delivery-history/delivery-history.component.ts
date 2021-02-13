/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-25 22:36:58
 * @modify date 2021-01-25 22:36:58
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryHistory } from 'src/app/models/delivery-history.model';
import { OrderStatus } from 'src/app/models/order-status.model';
import { DeliveryHistoryService } from 'src/app/services/delivery-history.service';
import { LoadingService } from 'src/app/services/loading.service';
import { OrderCancelModalService } from 'src/app/services/order-cancel-modal.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-delivery-history',
  templateUrl: './delivery-history.component.html',
  styleUrls: ['./delivery-history.component.css'],
})
export class DeliveryHistoryComponent implements OnInit {
  OrderStaus = OrderStatus;
  orderId;
  deliveryHistory: DeliveryHistory[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public loadingService: LoadingService,
    private orderCancelModal: OrderCancelModalService,
    private deliveryService: DeliveryHistoryService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['orderId'];
    this.fetchDeliveryHistory();
  }
  fetchDeliveryHistory() {
    this.loadingService.enableLoading();
    this.deliveryService
      .fetchDeliveryByOrderId(this.orderId)
      .subscribe((res: DeliveryHistory[]) => {
        this.loadingService.disableLoading();
        this.deliveryHistory = res;
      });
  }

  formattedDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }

  goBack() {
    this.location.back();
  }

  cancelOrder() {
    this.orderCancelModal.open();
    this.orderCancelModal.watch().subscribe((res) => {
      this.loadingService.enableLoading();
      if (res !== 'cancel-order') this.loadingService.disableLoading();
      else
        this.orderService
          .updateOrderStatus({
            orderId: this.orderId,
            status: 'CANCELLED',
          })
          .subscribe((res) => {
            console.log(res);
            this.fetchDeliveryHistory();
          });
    }).closed;
  }

  checkIfCancellable() {
    return (
      this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'DELIVERED' && this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'CANCELLED'
    );
  }

  fetchDeliveryColor(orderStatus) {
    switch (orderStatus) {
      case 'NEW':
      case 'DELIVERED':
        return 'green';
      case 'CANCELLED':
        return 'red';
      default:
        return '#1f9db9';
    }
  }
}
