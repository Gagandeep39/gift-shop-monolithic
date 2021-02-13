/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-25 19:53:04
 * @modify date 2021-01-25 19:53:04
 * @desc [description]
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartConfirmModalService } from 'src/app/services/cart-confirm-modal.service';

@Component({
  selector: 'app-cart-confirm-modal',
  templateUrl: './cart-confirm-modal.component.html',
  styleUrls: ['./cart-confirm-modal.component.css'],
})
export class CartConfirmModalComponent implements OnInit {
  display$: Observable<'open' | 'close'>;

  constructor(
    private modalService: CartConfirmModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  goToCart() {
    this.router.navigateByUrl('/products/cart');
    this.close();
  }
}
