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
import { ApprovalMaster } from './admin-user/approval-master/approval-master';
import { BusinessUnitMaster } from './admin-user/business-unit-master/business-unit-master';
import { CodeMaster } from './admin-user/code-master/code-master';
import { AssetMaster } from './business-user/asset-master/asset-master';
import { InsuranceCompanies } from './business-user/insurance-companies/insurance-companies';
import { EditPolicy } from './policy/manage-policy/edit-policy/edit-policy';
import { RequestApproval } from './policy-request/request-approval/request-approval';
import { CreatePolicy } from './policy/manage-policy/create-policy/create-policy';
import { ModifyPolicy } from './policy/manage-policy/modify-policy/modify-policy';
import { CreatePolicyCoinsured } from './policy/policy-coinsured/create-policy-coinsured/create-policy-coinsured';
import { EditPolicyCoinsured } from './policy/policy-coinsured/edit-policy-coinsured/edit-policy-coinsured';
import { EditRenewPolicy } from './policy/renew-policy/edit-renew-policy/edit-renew-policy';
import { ApprovePolicyDetails } from './policy/approve-policy/approve-policy-details/approve-policy-details';

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
      { path: 'policy-request/aprrove-request/request-approval', component: RequestApproval },
      { path: 'policy-request/events', component: Events },

      /*Policy*/
      { path: 'policy/manage-policy', component: ManagePolicy },
      { path: 'policy/manage-policy/create-policy', component: CreatePolicy },
      { path: 'policy/manage-policy/modify-policy', component: ModifyPolicy },
      { path: 'policy/manage-policy/edit-policy', component: EditPolicy },

      { path: 'policy/renew-policy', component: RenewPolicy },
      { path: 'policy/renew-policy/edit', component: EditRenewPolicy },

      { path: 'policy/policy-coinsured', component: PolicyCoinsured },
      { path: 'policy/policy-coinsured/create-policy-coinsured', component: CreatePolicyCoinsured },
      { path: 'policy/policy-coinsured/edit-policy-coinsured', component: EditPolicyCoinsured },

      { path: 'policy/approve-policy', component: ApprovePolicy },
      { path: 'policy/approve-policy/approve-policy-details', component: ApprovePolicyDetails },

      { path: 'policy/events', component: PolicyEvents },

      /*Admin User*/
      { path: 'admin-user/approval-master', component: ApprovalMaster },
      { path: 'admin-user/business-unit-master', component: BusinessUnitMaster },
      { path: 'admin-user/code-master', component: CodeMaster },

      /*Master User*/
      { path: 'business-user/insurance-companies', component: InsuranceCompanies },
      { path: 'business-user/asset-master', component: AssetMaster },

      // You can add other feature modules here later
      // { path: 'admin', loadChildren: () => import('../admin/admin.routes').then(m => m.ADMIN_ROUTES) },
    ],
  },
];
