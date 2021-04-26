import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductService } from 'src/app/services/product.service';
import { UpdateStatusModalService } from 'src/app/services/update-status-modal.service';

@Component({
  selector: 'app-view-product-new',
  templateUrl: './view-product-new.component.html',
  styleUrls: ['./view-product-new.component.css'],
})
export class ViewProductNewComponent implements OnInit {
  dataSource = new MatTableDataSource<Product>();
  productSubscription;
  activeTypes = ['ENABLED', 'DISABLED'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // Specify columns tht should be rendered, must match names of matColumnDef
  // ID is not beign displayed as its not present here
  displayedColumns: string[] = [
    'productId',
    'productName',
    'productDescription',
    'productStatus',
    'productPrice',
    'discountPercent',
    'updatedPrice',
    'edit',
  ];

  constructor(
    private productService: ProductService,
    public loadingService: LoadingService,
    private updateStatusModalService: UpdateStatusModalService
  ) {}

  ngOnInit(): void {
    this.fetchAllProducts();
  }
  fetchAllProducts() {
    this.loadingService.enableLoading();
    this.productSubscription = this.productService
      .fetchAllProducts()
      .subscribe((response: Product[]) => {
        this.dataSource.data = response;
        this.loadingService.disableLoading();
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }

  updateStatus(product) {
    this.updateStatusModalService.open(product);
    this.updateStatusModalService
      .watch()
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          if (res === 'close') {
            this.dataSource.data = null;
            this.fetchAllProducts();
          }
        },
      });
  }

  calculateUpdatedPrice(element) {
    return (
      element.productPrice -
      element.productPrice * 0.01 * element.discountPercent
    );
  }
}
