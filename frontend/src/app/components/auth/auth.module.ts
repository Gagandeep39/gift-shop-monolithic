import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestQuestionComponent } from './request-question/request-question.component';
import { SocialRegisterComponent } from './social-register/social-register.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ChangePasswordComponent,
    LoginComponent,
    RegisterComponent,
    RequestQuestionComponent,
    SocialRegisterComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AuthModule { }
