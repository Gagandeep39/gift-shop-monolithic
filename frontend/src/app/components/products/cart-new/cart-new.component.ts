/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-06 22:36:09
 * @modify date 2021-02-06 22:36:09
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';
import { ProductInOrder } from 'src/app/models/product-in-order.model';
import { CartService } from 'src/app/services/cart.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-cart-new',
  templateUrl: './cart-new.component.html',
  styleUrls: ['./cart-new.component.css'],
})
export class CartNewComponent implements OnInit {
  cart: Cart;
  totalBeforeDiscount: number;
  totalAfterDiscount: number;
  loadingState = {
    loading: false,
    productId: null
  };

  constructor(
    private location: Location,
    public loadingService: LoadingService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchCart();
  }

  fetchCart() {
    this.cartService
      .fetchCartByUserId()
      .pipe(take(1))
      .subscribe({
        next: (res: Cart) => {
          this.cart = res;
          this.calculateOrderSummary(res.products);
        },
        complete: () => this.loadingService.disableLoading(),
      });
  }

  goBack() {
    this.location.back();
  }

  calculateOrderSummary(productsInOrder: ProductInOrder[]) {
    console.log(productsInOrder);

    let discountPrice = 0;
    let totalBeforeDiscount = 0;
    for (const key in productsInOrder) {
      console.log(productsInOrder[key]);
      totalBeforeDiscount += productsInOrder[key].productPrice;
      if (productsInOrder[key].discountPercent === 0)
        discountPrice = productsInOrder[key].productPrice;
      else discountPrice += this.calculatePrice(productsInOrder[key]);
    }
    this.totalBeforeDiscount = totalBeforeDiscount;

    this.totalAfterDiscount = discountPrice;
  }

  calculatePrice(currentProduct: ProductInOrder) {
    return (
      currentProduct.productPrice -
      currentProduct.productPrice * 0.01 * currentProduct.discountPercent
    );
  }

  removeItem(productId: number) {
    this.loadingState = {
      productId: productId,
      loading: true,
    };
    this.cartService
      .removeItemFromCart(productId)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.fetchCart();
        },
        complete: () => this.loadingState = {
          loading: false,
          productId: null,
        },
      });
  }
}
