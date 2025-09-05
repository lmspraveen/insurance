import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth.routes';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    children: AUTH_ROUTES,
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
