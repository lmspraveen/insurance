import { Routes } from '@angular/router';
import CommonLayout from './common.layout';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from '../guards/auth.guard';
import { CreatePolicyRequest } from './policy-request/create-policy-request/create-policy-request';
import { ApproveRequest } from './policy-request/approve-request/approve-request';
import { Events } from './policy-request/events/events';

export const COMMON_ROUTES: Routes = [
  {
    path: '',
    component: CommonLayout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },

      { path: 'policy-request/create-policy-request', component: CreatePolicyRequest },
      { path: 'policy-request/aprrove-request', component: ApproveRequest },
      { path: 'policy-request/events', component: Events },

      // You can add other feature modules here later
      // { path: 'admin', loadChildren: () => import('../admin/admin.routes').then(m => m.ADMIN_ROUTES) },
    ],
  },
];
