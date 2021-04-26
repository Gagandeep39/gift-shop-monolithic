/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-07 11:07:12
 * @modify date 2021-02-07 11:07:12
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { Order } from 'src/app/models/order.model';
import { LoadingService } from 'src/app/services/loading.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-history-new',
  templateUrl: './order-history-new.component.html',
  styleUrls: ['./order-history-new.component.css'],
})
export class OrderHistoryNewComponent implements OnInit {
  orderHistory: Order[] = [];
  dataSource = new MatTableDataSource<Order>();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // Specify columns tht should be rendered, must match names of matColumnDef
  // ID is not beign displayed as its not present here
  displayedColumns: string[] = [
    'orderId',
    'buyerName',
    'finalPrice',
    'orderStatus',
    'details',
    'history',
  ];

  constructor(
    private location: Location,
    public loadingService: LoadingService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.fetchAllOrders();
  }

  fetchAllOrders(): void {
    this.orderService
      .fetchByLoggedInUserId()
      .pipe(take(1))
      .subscribe({
        next: (res: Order[]) => {
          this.dataSource.data = res.reverse();
          this.orderHistory = res;
        },
        complete: () => console.log('Completed'),
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fetchColor(status: string): string {
    switch (status) {
      case 'DELIVERED':
        return 'green';
      case 'CANCELLED':
        return 'red';
      default:
        return '#1f9db9';
    }
  }
}
