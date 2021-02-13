import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllProducts();
  }
  fetchAllProducts() {
    this.service.fetchAllProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log(this.products);
    });
  }

  deleteProduct(productID: number) {
    this.service.deleteProduct(productID).subscribe((response) => this.fetchAllProducts());
  }

  updateProduct(product: Product) {}
}
