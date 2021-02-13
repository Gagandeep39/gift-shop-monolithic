import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
})
export class ViewCategoriesComponent implements OnInit {
  dataSource = new MatTableDataSource<Category>();
  categorySubscription;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // Specify columns tht should be rendered, must match names of matColumnDef
  // ID is not beign displayed as its not present here
  displayedColumns: string[] = [
    'categoryId',
    'categoryName',
    'categoryDescription',
    'edit',
  ];

  constructor(
    private categoryService: CategoryService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.fetchAllCategories();
  }
  fetchAllCategories() {
    this.loadingService.enableLoading();
    this.categorySubscription = this.categoryService
      .fetchAllCategories()
      .subscribe((response: Category[]) => {
        this.dataSource.data = response;
        this.loadingService.disableLoading();
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) this.categorySubscription.unsubscribe();
  }
}
