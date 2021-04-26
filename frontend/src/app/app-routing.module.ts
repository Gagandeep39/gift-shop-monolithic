/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-21 12:47:19
 * @modify date 2021-01-21 12:47:19
 * @desc Routing module
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryNewComponent } from './components/admin/add-category-new/add-category-new.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { AddProductNewComponent } from './components/admin/add-product-new/add-product-new.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpdateCategoryComponent } from './components/admin/update-category/update-category.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';
import { ViewProductNewComponent } from './components/admin/view-product-new/view-product-new.component';
import { ViewProductComponent } from './components/admin/view-product/view-product.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RequestQuestionComponent } from './components/auth/request-question/request-question.component';
import { SocialRegisterComponent } from './components/auth/social-register/social-register.component';
import { AboutUsComponent } from './components/products/about-us/about-us.component';
import { CartNewComponent } from './components/products/cart-new/cart-new.component';
import { CartComponent } from './components/products/cart/cart.component';
import { CartSummaryComponent } from './components/products/checkout/cart-summary/cart-summary.component';
import { CheckoutComponent } from './components/products/checkout/checkout.component';
import { PaymentSuccessComponent } from './components/products/checkout/payment-success/payment-success.component';
import { PaymentComponent } from './components/products/checkout/payment/payment.component';
import { ShippingDetailsComponent } from './components/products/checkout/shipping-details/shipping-details.component';
import { EditProfileComponent } from './components/products/edit-profile/edit-profile.component';
import { DeliveryHistoryComponent } from './components/products/orders/delivery-history/delivery-history.component';
import { OrderDetailsNewComponent } from './components/products/orders/order-details-new/order-details-new.component';
import { OrderDetailsComponent } from './components/products/orders/order-details/order-details.component';
import { OrderHistoryNewComponent } from './components/products/orders/order-history-new/order-history-new.component';
import { OrderHistoryComponent } from './components/products/orders/order-history/order-history.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewProfileComponent } from './components/products/view-profile/view-profile.component';
import { AuthAccessGuard } from './guards/auth-access.guard';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthAccessGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthAccessGuard],
  },
  {
    path: 'socialregister',
    component: SocialRegisterComponent,
    canActivate: [AuthAccessGuard],
  },
  {
    path: 'forgotpassword',
    component: RequestQuestionComponent,
    canActivate: [AuthAccessGuard],
  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent,
    canActivate: [AuthAccessGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartNewComponent, canActivate: [AuthGuard] },
      {
        path: 'orders',
        component: OrderHistoryNewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        component: ViewProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'editprofile',
        component: EditProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'orders/:orderId',
        component: OrderDetailsNewComponent,
        canActivate: [AuthGuard],
      },
      { path: 'about', component: AboutUsComponent },
      {
        path: 'delivery/:orderId',
        component: DeliveryHistoryComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard],
        children: [
          { path: 'summary', component: CartSummaryComponent },
          { path: 'shipping', component: ShippingDetailsComponent },
          { path: 'payment', component: PaymentComponent },
          { path: 'success/:orderId', component: PaymentSuccessComponent },
          { path: '', redirectTo: 'shipping', pathMatch: 'full' },
        ],
      },
      { path: ':productId', component: ProductDetailsComponent },
    ],
  },
  {
    path: 'admin',
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
  { path: 'about', redirectTo: 'products/about', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '403', component: AccessDeniedComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
