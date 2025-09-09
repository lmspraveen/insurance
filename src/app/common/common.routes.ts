import { Routes } from '@angular/router';
import CommonLayout from './common.layout';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from '../guards/auth.guard';

export const COMMON_ROUTES: Routes = [
  {
    path: '',
    component: CommonLayout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      // You can add other feature modules here later
      // { path: 'admin', loadChildren: () => import('../admin/admin.routes').then(m => m.ADMIN_ROUTES) },
    ],
  },
];
