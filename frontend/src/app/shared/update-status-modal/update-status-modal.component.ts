/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-05 18:41:08
 * @modify date 2021-02-05 18:41:08
 * @desc [description]
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProductStatus } from 'src/app/models/product-status.model';
import { Product } from 'src/app/models/product.model';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductService } from 'src/app/services/product.service';
import { UpdateStatusModalService } from 'src/app/services/update-status-modal.service';

@Component({
  selector: 'app-update-status-modal',
  templateUrl: './update-status-modal.component.html',
  styleUrls: ['./update-status-modal.component.css'],
})
export class UpdateStatusModalComponent implements OnInit {
  display$: Observable<'open' | 'close'>;
  product: Product;
  statusTypes = ProductStatus;
  currentStatus = 'DISABLED';

  constructor(
    private modalService: UpdateStatusModalService,
    public loadingService: LoadingService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
    this.openSubscription();
  }
  openSubscription() {
    this.display$.subscribe((res) => {
      this.product = this.modalService.product;
    });
  }

  close() {
    this.modalService.close();
  }

  update() {
    this.product.productStatus = this.currentStatus;
    this.loadingService.enableLoading();
    this.productService
      .updateProduct(this.product)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.loadingService.disableLoading();
          this.close();
        },
      });
  }
}
