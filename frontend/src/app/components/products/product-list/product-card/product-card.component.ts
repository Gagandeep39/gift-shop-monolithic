/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-24 01:56:50
 * @modify date 2021-01-24 01:56:50
 * @desc [description]
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  productName;
  @Input()
  productDescription;
  @Input()
  productImageUrl;
  @Input()
  productPrice;
  @Input()
  productId;
  @Input()
  productStatus;
  @Input()
  productQuantity;
  @Input()
  discountPercent = 50;
  @Output()
  addToCartEvent = new EventEmitter<string>();

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}

  addNewItem(productId) {
    this.addToCartEvent.emit(productId);
  }

  isProductAvailable(): boolean {
    return this.productStatus !== 'ENABLED' || this.productQuantity <= 0;
  }

  badgeColor() {
    if (this.discountPercent <= 10) return '#FFCE03';
    else if (this.discountPercent <= 20) return '#FD9A01';
    else if (this.discountPercent <= 30) return '#FD6104';
    else if (this.discountPercent <= 40) return '#FF2C05';
    else return '#F00505';
  }

  reducedPrice() {
    if (this.discountPercent === 0) return this.productPrice;
    return this.productPrice - this.productPrice * 0.01 * this.discountPercent;
  }
}
