import { Routes } from '@angular/router';
import CommonLayout from './common.layout';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from '../guards/auth.guard';
import { CreatePolicyRequest } from './policy-request/create-policy-request/create-policy-request';
import { ApproveRequest } from './policy-request/approve-request/approve-request';
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
import { PolicyInvoices } from './invoices/policy-invoices/policy-invoices';
import { CreateInvoice } from './invoices/create-invoice/create-invoice';
import { InvoiceDetails } from './invoices/invoice-details/invoice-details';
import { RaiseClaim } from './claims/raise-claim/raise-claim';
import { ClaimsApprovals } from './claims/claims-approvals/claims-approvals';
import { ClaimsDashboard } from './claims/claims-dashboard/claims-dashboard';
import { ClaimsPaymentsClosures } from './claims/claims-payments-closures/claims-payments-closures';
import { ModifyClaim } from './claims/claims-dashboard/modify-claim/modify-claim';
import { ClaimDetails } from './claims/claims-dashboard/claim-details/claim-details';

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

      /*Admin User*/
      { path: 'admin-user/approval-master', component: ApprovalMaster },
      { path: 'admin-user/business-unit-master', component: BusinessUnitMaster },
      { path: 'admin-user/code-master', component: CodeMaster },

      /*Master User*/
      { path: 'masters/insurance-companies', component: InsuranceCompanies },
      { path: 'masters/asset-master', component: AssetMaster },

      /*Invoices*/
      { path: 'invoices/policy-invoices', component: PolicyInvoices },
      { path: 'invoices/policy-invoices/create-invoice', component: CreateInvoice },
      { path: 'invoices/policy-invoices/invoice-details', component: InvoiceDetails },

      /*claims*/
      { path: 'claims/raise-claim', component: RaiseClaim },
      { path: 'claims/claims-dashboard', component: ClaimsDashboard },
      { path: 'claims/claims-dashboard/claim-details', component: ClaimDetails },
      { path: 'claims/claims-dashboard/modify-claim', component: ModifyClaim },
      { path: 'claims/claims-approvals', component: ClaimsApprovals },
      { path: 'claims/claims-payments-clousers', component: ClaimsPaymentsClosures },

      // You can add other feature modules here later
      // { path: 'admin', loadChildren: () => import('../admin/admin.routes').then(m => m.ADMIN_ROUTES) },
    ],
  },
];
