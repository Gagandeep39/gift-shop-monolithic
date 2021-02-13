import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product;
  // catId : number;
  // catName : string;
  category : Category[] = [];
  categoryId : number;

  constructor(private service : ProductService, private categoryService : CategoryService, private route : Router) {
    this.product = new Product();
   }

  ngOnInit(){
    this.categoryService.fetchAllCategories().subscribe((response : Category[]) => {
        this.category = response;
        console.log(this.category);
    });
  }

  getSelectedOptionText(cId : number){
    this.categoryId = cId;
  }

  // saveProduct(){
  //   this.service.addProduct(this.product).subscribe(data => {
  //     this.product=data;
  //     console.log(data);
  //   });
  //   this.product = new Product();
  // }

  saveProduct(){
    this.service.addProduct(this.product).subscribe(response => {
      this.route.navigate(['admin/view']);
    });
    this.product = new Product();
  }

}
