import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RoleGuard } from 'src/app/guards/role.guard';
import { AddCategoryNewComponent } from './add-category-new/add-category-new.component';
import { AddProductNewComponent } from './add-product-new/add-product-new.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { ViewProductNewComponent } from './view-product-new/view-product-new.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Admin' },
    children: [
      { path: 'add', component: AddProductNewComponent },
      { path: 'view', component: ViewProductNewComponent },
      { path: 'categoryview', component: ViewCategoriesComponent },
      { path: 'categoryadd', component: AddCategoryNewComponent },
      { path: 'categoryedit/:categoryId', component: UpdateCategoryComponent },
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'update/:productId', component: UpdateProductComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
