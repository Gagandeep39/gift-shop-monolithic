/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-06 22:41:33
 * @modify date 2021-02-06 22:41:33
 * @desc [description]
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css'],
})
export class CartItemCardComponent implements OnInit {
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
  @Output()
  removeItemEvent = new EventEmitter<number>();
  @Input()
  loadingState;

  constructor() {}

  ngOnInit(): void {}

  discountPrice(): number {
    return this.discountPercent <= 0
      ? this.productPrice
      : this.productPrice - this.productPrice * 0.01 * this.discountPercent;
  }

  deleteProduct() {
    this.removeItemEvent.emit(this.productId);
  }

}
