import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialCustomModule } from 'src/app/material-custom/material-custom.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartItemCardComponent } from './cart-new/cart-item-card/cart-item-card.component';
import { CartNewComponent } from './cart-new/cart-new.component';
import { CartSummaryComponent } from './checkout/cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentSuccessComponent } from './checkout/payment-success/payment-success.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ShippingDetailsComponent } from './checkout/shipping-details/shipping-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DeliveryHistoryComponent } from './orders/delivery-history/delivery-history.component';
import { OrderDetailsNewComponent } from './orders/order-details-new/order-details-new.component';
import { ProductDetailCardComponent } from './orders/order-details-new/product-detail-card/product-detail-card.component';
import { OrderHistoryNewComponent } from './orders/order-history-new/order-history-new.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryCarauselComponent } from './product-list/category-carausel/category-carausel.component';
import { ProductCardComponent } from './product-list/product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CartNewComponent,
    OrderHistoryNewComponent,
    ViewProfileComponent,
    EditProfileComponent,
    OrderDetailsNewComponent,
    AboutUsComponent,
    DeliveryHistoryComponent,
    CheckoutComponent,
    CartSummaryComponent,
    ShippingDetailsComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    ProductDetailsComponent,
    OrdersComponent,
    CategoryCarauselComponent,
    ProductDetailCardComponent,
    CartItemCardComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    MaterialCustomModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
