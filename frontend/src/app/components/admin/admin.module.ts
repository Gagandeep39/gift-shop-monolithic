import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialCustomModule } from 'src/app/material-custom/material-custom.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCategoryNewComponent } from './add-category-new/add-category-new.component';
import { AddProductNewComponent } from './add-product-new/add-product-new.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { ViewProductNewComponent } from './view-product-new/view-product-new.component';

@NgModule({
  declarations: [
    AddCategoryNewComponent,
    AddProductNewComponent,
    UpdateCategoryComponent,
    UpdateProductComponent,
    ViewCategoriesComponent,
    ViewProductNewComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialCustomModule,
  ],
})
export class AdminModule {}
