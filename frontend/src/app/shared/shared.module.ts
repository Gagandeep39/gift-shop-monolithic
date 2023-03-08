import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AccessDeniedModalComponent } from './access-denied-modal/access-denied-modal.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { CartConfirmModalComponent } from './cart-confirm-modal/cart-confirm-modal.component';
import { FooterComponent } from './footer/footer.component';
import { FormSubmitModalComponent } from './form-submit-modal/form-submit-modal.component';
import { GlobalErrorModalComponent } from './global-error-modal/global-error-modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderCancelModalComponent } from './order-cancel-modal/order-cancel-modal.component';
import { UpdateStatusModalComponent } from './update-status-modal/update-status-modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccessDeniedComponent,
    AccessDeniedModalComponent,
    AuthModalComponent,
    CartConfirmModalComponent,
    FooterComponent,
    FormSubmitModalComponent,
    GlobalErrorModalComponent,
    NavigationComponent,
    NotFoundComponent,
    OrderCancelModalComponent,
    UpdateStatusModalComponent,
  ],
  exports: [
    AccessDeniedComponent,
    AccessDeniedModalComponent,
    AuthModalComponent,
    CartConfirmModalComponent,
    FooterComponent,
    FormSubmitModalComponent,
    GlobalErrorModalComponent,
    NavigationComponent,
    NotFoundComponent,
    OrderCancelModalComponent,
    UpdateStatusModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class SharedModule { }
