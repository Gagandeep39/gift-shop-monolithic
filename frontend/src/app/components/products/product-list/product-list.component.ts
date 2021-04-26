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
  sortByTypes = [
    { name: 'Name - ASC', sortBy: 'productName', direction: 'ASC' },
    { name: 'Name - DESC', sortBy: 'productName', direction: 'DESC' },
    { name: 'Category - ASC', sortBy: 'productCategory_categoryName', direction: 'ASC' },
    { name: 'Category - DESC', sortBy: 'productCategory_categoryName', direction: 'DESC' },
    { name: 'Price High - Low', sortBy: 'productPrice', direction: 'DESC' },
    { name: 'Price Low - High', sortBy: 'productPrice', direction: 'ASC' },
    { name: 'Discount High - Low', sortBy: 'discountPercent', direction: 'DESC' },
    { name: 'Discount Low - High', sortBy: 'discountPercent', direction: 'ASC' },
  ];
  activeSortType = this.sortByTypes[0];
  sortTypeChanged;

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
    this.page = 0;
    this.initProducts();
    this.subscribeToCategories();
    this.subscribeToSearchQuery();
  }

  initProducts() {
    this.fetchAllByPage();
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
    this.activeSortType = this.sortByTypes[0];
    this.eventService.categoryChanged.next(null);
    this.eventService.searchQueryChanged.next(null);
    this.productQuery = null;
    this.productList = null;
    this.activeCategory = null;
    this.page = 0;
    this.fetchAllByPage();
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
        // this.page = 0;
        // this.fetchAllByPage();
      } else
        this.productService.findByName(query).subscribe((res: Product[]) => {
          this.productQuery = query;
          this.activeCategory = null;
          this.productList = res;
          this.loadingService.disableLoading();
        });
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
        // this.page = 0;
        // this.fetchAllByPage();
      } else
        this.productService
          .findByCategory(category)
          .pipe(take(1))
          .subscribe((res: Product[]) => {
            this.productQuery = null;
            this.activeCategory = category;
            this.productList = res;
            this.loadingService.disableLoading();
          });
    });
  }

  previousScrollValue = 0;

  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  onScroll(event) {
    if (
      window.innerHeight + window.scrollY >= (document.body.scrollHeight-100) &&
      !this.activeCategory &&
      !this.productQuery &&
      this.previousScrollValue !== window.innerHeight + window.scrollY
    ) {
      this.previousScrollValue = window.innerHeight + window.scrollY;
      console.log(window.innerHeight + window.scrollY);
      console.log(this.page);
      
      this.page++;
      this.fetchAllByPage();
    }
  }

  fetchAllByPage() {
    this.loadingService.enableLoading();
    this.productService
      .fetchAllByPaging(this.page, this.activeSortType.sortBy, this.activeSortType.direction)
      // .pipe(take(1))
      .subscribe((res: Product[]) => {
        console.log(this.page);
        
        if (!this.activeCategory && !this.productQuery)
          if (
            this.productList &&
            JSON.stringify(
              this.productList.slice(Math.max(this.productList.length - 10, 0))
            ) != JSON.stringify(res) &&
            !this.sortTypeChanged
          )
            // Paging works when category and search are null
            this.productList.push(...res);
          else {
            this.sortTypeChanged = undefined;
            this.productList = res;
          }
        this.loadingService.disableLoading();
        console.log(this.productList);
        
      });
  }

  onChangeSorting(item) {
    this.sortTypeChanged = 1;
    this.activeSortType = item;
    this.page = 0;
    this.fetchAllByPage();
  }
}
