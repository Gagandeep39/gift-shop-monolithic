/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-05 01:34:28
 * @modify date 2021-02-05 01:34:28
 * @desc [description]
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail-card',
  templateUrl: './product-detail-card.component.html',
  styleUrls: ['./product-detail-card.component.css'],
})
export class ProductDetailCardComponent implements OnInit {
  @Input()
  productId;
  @Input()
  productName;
  @Input()
  productDescription;
  @Input()
  productIcon;
  @Input()
  productPrice;
  @Input()
  productQuantity;
  @Input()
  discountPercent;

  constructor() {}

  ngOnInit(): void {}

  discountPrice(): number {
    return this.discountPercent <= 0
      ? this.productPrice
      : this.productPrice - this.productPrice * 0.01 * this.discountPercent;
  }
}
