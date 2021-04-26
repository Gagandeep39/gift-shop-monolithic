/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-31 19:55:12
 * @modify date 2021-01-31 19:55:12
 * @desc [description]
 */
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-category-carausel',
  templateUrl: './category-carausel.component.html',
  styleUrls: ['./category-carausel.component.css'],
})
export class CategoryCarauselComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private categoryService: CategoryService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService
      .fetchAllCategories()
      .pipe(take(1))
      .subscribe((res: Category[]) => (this.categories = res));
  }

  triggerCategoryChange(categoryName) {
    this.eventService.categoryChanged.next(categoryName);
  }
}
