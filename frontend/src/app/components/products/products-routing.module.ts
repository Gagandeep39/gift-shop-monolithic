import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartNewComponent } from './cart-new/cart-new.component';
import { CartSummaryComponent } from './checkout/cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentSuccessComponent } from './checkout/payment-success/payment-success.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ShippingDetailsComponent } from './checkout/shipping-details/shipping-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DeliveryHistoryComponent } from './orders/delivery-history/delivery-history.component';
import { OrderDetailsNewComponent } from './orders/order-details-new/order-details-new.component';
import { OrderHistoryNewComponent } from './orders/order-history-new/order-history-new.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
