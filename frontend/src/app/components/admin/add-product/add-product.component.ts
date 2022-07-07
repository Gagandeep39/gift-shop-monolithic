import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product : Product;
  category : Category[] = [];
  categoryId : number;

  constructor(private service : ProductService, private categoryService : CategoryService, private route : Router) {
    this.product = new Product();
  }

  ngOnInit(){
    this.categoryService.fetchAllCategories().subscribe((response : Category[]) => {
        this.category = response;
    });
  }

  getSelectedOptionText(cId : number){
    this.categoryId = cId;
  }

  saveProduct(){
    this.service.addProduct(this.product).subscribe(response => {
      this.route.navigate(['admin/view']);
    });
    this.product = new Product();
  }

}
