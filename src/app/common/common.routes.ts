import { Routes } from '@angular/router';
import CommonLayout from './common.layout';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from '../guards/auth.guard';
import { CreatePolicyRequest } from './policy-request/create-policy-request/create-policy-request';
import { ApproveRequest } from './policy-request/approve-request/approve-request';
import { Events } from './policy-request/events/events';
import { PolicyEvents } from './policy/events/events';
import { ManagePolicy } from './policy/manage-policy/manage-policy';
import { RenewPolicy } from './policy/renew-policy/renew-policy';
import { PolicyCoinsured } from './policy/policy-coinsured/policy-coinsured';
import { ApprovePolicy } from './policy/approve-policy/approve-policy';

export const COMMON_ROUTES: Routes = [
  {
    path: '',
    component: CommonLayout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },

      /*Policy Request*/
      { path: 'policy-request/create-policy-request', component: CreatePolicyRequest },
      { path: 'policy-request/aprrove-request', component: ApproveRequest },
      { path: 'policy-request/events', component: Events },

      /*Policy*/
      { path: 'policy/manage-policy', component: ManagePolicy },
      { path: 'policy/renew-policy', component: RenewPolicy },
      { path: 'policy/policy-coinsured', component: PolicyCoinsured },
      { path: 'policy/approve-policy', component: ApprovePolicy },
      { path: 'policy/events', component: PolicyEvents },

      // You can add other feature modules here later
      // { path: 'admin', loadChildren: () => import('../admin/admin.routes').then(m => m.ADMIN_ROUTES) },
    ],
  },
];
