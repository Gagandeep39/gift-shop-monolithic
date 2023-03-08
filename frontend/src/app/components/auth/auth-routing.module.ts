import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAccessGuard } from 'src/app/guards/auth-access.guard';
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestQuestionComponent } from './request-question/request-question.component';
import { SocialRegisterComponent } from './social-register/social-register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthAccessGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'socialregister',
        component: SocialRegisterComponent,
      },
      {
        path: 'forgotpassword',
        component: RequestQuestionComponent,
      },
      {
        path: 'changepassword',
        component: ChangePasswordComponent,
      },
    ],
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthRoutingModule { }
