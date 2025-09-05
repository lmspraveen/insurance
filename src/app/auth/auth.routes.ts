import { Routes } from '@angular/router';
import AuthLayout from './auth.layout';
import { Login } from './login/login';
import { ForgotPassword } from './forgot-password/forgot-password';
import { ResetPassword } from './reset-password/reset-password';
import { Signup } from './signup/signup';
import { Otp } from './otp/otp';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'signup', component: Signup },
      { path: 'forgot-password', component: ForgotPassword },
      { path: 'reset-password', component: ResetPassword },
      { path: 'otp', component: Otp },
    ],
  },
];
