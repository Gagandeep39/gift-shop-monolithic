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
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { httpInterceptors } from './providers';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { RequestQuestionComponent } from './components/auth/request-question/request-question.component';
import { SocialRegisterComponent } from './components/auth/social-register/social-register.component';
import { MaterialCustomModule } from './material-custom/material-custom.module';
import { AuthComponent } from './components/auth/auth.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ChangePasswordComponent,
    RequestQuestionComponent,
    SocialRegisterComponent,
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
