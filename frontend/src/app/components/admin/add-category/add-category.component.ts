import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  category: Category;

  constructor(private service: CategoryService) {
    this.category = new Category();
  }

  ngOnInit() {}

  saveCategory() {
    this.service.createCategory(this.category).subscribe();
  }
}
