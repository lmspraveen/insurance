import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth.routes';
import { COMMON_ROUTES } from './common/common.routes';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    children: AUTH_ROUTES,
  },
  {
    path: '',
    children: COMMON_ROUTES,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
