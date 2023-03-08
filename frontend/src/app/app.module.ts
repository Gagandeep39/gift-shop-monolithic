/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-21 12:46:55
 * @modify date 2021-01-21 12:46:55
 * @desc Root module
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CartSummaryComponent } from './components/products/checkout/cart-summary/cart-summary.component';
import { ShippingDetailsComponent } from './components/products/checkout/shipping-details/shipping-details.component';
import { PaymentComponent } from './components/products/checkout/payment/payment.component';
import { DeliveryHistoryComponent } from './components/products/orders/delivery-history/delivery-history.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/products/orders/orders.component';
import { CheckoutComponent } from './components/products/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { httpInterceptors } from './providers';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { RequestQuestionComponent } from './components/auth/request-question/request-question.component';
import { AboutUsComponent } from './components/products/about-us/about-us.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductCardComponent } from './components/products/product-list/product-card/product-card.component';
import { SocialRegisterComponent } from './components/auth/social-register/social-register.component';
import { ViewProfileComponent } from './components/products/view-profile/view-profile.component';
import { EditProfileComponent } from './components/products/edit-profile/edit-profile.component';
import { MaterialCustomModule } from './material-custom/material-custom.module';
import { CategoryCarauselComponent } from './components/products/product-list/category-carausel/category-carausel.component';
import { OrderDetailsNewComponent } from './components/products/orders/order-details-new/order-details-new.component';
import { ProductDetailCardComponent } from './components/products/orders/order-details-new/product-detail-card/product-detail-card.component';
import { PaymentSuccessComponent } from './components/products/checkout/payment-success/payment-success.component';
import { CartNewComponent } from './components/products/cart-new/cart-new.component';
import { CartItemCardComponent } from './components/products/cart-new/cart-item-card/cart-item-card.component';
import { OrderHistoryNewComponent } from './components/products/orders/order-history-new/order-history-new.component';
import { AuthComponent } from './components/auth/auth.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    CartSummaryComponent,
    ShippingDetailsComponent,
    PaymentComponent,
    DeliveryHistoryComponent,
    ProductsComponent,
    OrdersComponent,
    CheckoutComponent,
    AdminComponent,
    ChangePasswordComponent,
    RequestQuestionComponent,
    AboutUsComponent,
    ProductListComponent,
    ProductCardComponent,
    SocialRegisterComponent,
    ViewProfileComponent,
    EditProfileComponent,
    CategoryCarauselComponent,
    OrderDetailsNewComponent,
    ProductDetailCardComponent,
    PaymentSuccessComponent,
    CartNewComponent,
    CartItemCardComponent,
    OrderHistoryNewComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialCustomModule,
    SharedModule
  ],
  providers: [
    httpInterceptors, 
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
