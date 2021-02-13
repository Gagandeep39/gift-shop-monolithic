/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-24 01:57:04
 * @modify date 2021-01-24 01:57:04
 * @desc [description]
 */
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Item } from 'src/app/models/item.model';
import { Product } from 'src/app/models/product.model';
import { AuthModalService } from 'src/app/services/auth-modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartConfirmModalService } from 'src/app/services/cart-confirm-modal.service';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  activeCategory = null;
  productQuery = null;
  page = 0;

  constructor(
    public loadingService: LoadingService,
    private eventService: EventService,
    private productService: ProductService,
    private modalService: AuthModalService,
    private authService: AuthService,
    private router: Router,
    private cartService: CartService,
    private cartConfirmModal: CartConfirmModalService
  ) {}

  ngOnInit(): void {
    this.initProducts();
    this.subscribeToCategories();
    this.subscribeToSearchQuery();
  }

  initProducts() {
    this.fetchAll();
  }

  // Fetch from server
  fetchAll() {
    this.loadingService.enableLoading();
    this.productService.fetchAllProducts().subscribe((res: Product[]) => {
      this.productList = res;
      this.loadingService.disableLoading();
    }).closed;
  }

  // Reset all search queries
  resetAll() {
    this.eventService.categoryChanged.next(null);
    this.eventService.searchQueryChanged.next(null);
    this.productQuery = null;
    this.productList = null;
    this.activeCategory = null;
    this.page = 0;
    this.fetchAll();
  }

  addToCart(itemId) {
    let item = {
      productId: itemId,
      quantity: 1,
    };
    if (this.checkForAuthAndShowPopUp()) {
      this.loadingService.enableLoading();
      this.cartService.addToCart(item).subscribe((res) => {
        this.cartConfirmModal.open();
        this.loadingService.disableLoading();
      });
    }
  }
  checkForAuthAndShowPopUp() {
    if (this.authService.isAuthenticated()) return true;
    this.modalService.open(this.router.url);
    return false;
  }

  // Subbscribe to search
  subscribeToSearchQuery() {
    this.eventService.searchQueryChanged.subscribe((query) => {
      this.loadingService.enableLoading();
      // Fetch and unsubscribe
      if (!query) {
        this.page = 0;
        this.fetchAll();
      } else
        this.productService.findByName(query).subscribe((res: Product[]) => {
          this.productQuery = query;
          this.activeCategory = null;
          this.productList = res;
          this.loadingService.disableLoading();
        }).closed;
    });
  }

  // Category change subscription
  subscribeToCategories() {
    this.eventService.categoryChanged.subscribe((category) => {
      this.loadingService.enableLoading();
      // Reset previous cateogry
      this.activeCategory = null;
      this.productQuery = null;
      if (!category) {
        this.page = 0;
        this.fetchAll();
      } else
        this.productService
          .findByCategory(category)
          .subscribe((res: Product[]) => {
            this.productQuery = null;
            this.activeCategory = category;
            this.productList = res;
            this.loadingService.disableLoading();
          }).closed;
    });
  }

  // fetchAllByPage() {
  //   this.loadingService.enableLoading();
  //   this.productService
  //     .fetchAllProducts()
  //     .pipe(take(1))
  //     .subscribe((res: Product[]) => {
  //       if (!this.activeCategory && !this.productQuery) // Paging works when category and search are null
  //           this.productList.push(...res);
  //         else this.productList = res;
  //       this.loadingService.disableLoading();
  //     });
  // }
}
