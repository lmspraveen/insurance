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
import { AssetMaster } from './masters/asset-master/asset-master';
import { InsuranceCompanies } from './masters/insurance-companies/insurance-companies';
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
import { ClaimsApprovalDetails } from './claims/claims-approvals/claims-approval-details/claims-approval-details';
import { ClosureDetails } from './claims/claims-payments-closures/closure-details/closure-details';
import { AddCompany } from './masters/insurance-companies/add-company/add-company';
import { CompanyDetails } from './masters/insurance-companies/company-details/company-details';
import { AddAsset } from './masters/asset-master/add-asset/add-asset';
import { AssetDetails } from './masters/asset-master/asset-details/asset-details';
import { AddApproval } from './admin-user/approval-master/add-approval/add-approval';
import { ApprovalDetails } from './admin-user/approval-master/approval-details/approval-details';
import { AddBusinessUnit } from './admin-user/business-unit-master/add-business-unit/add-business-unit';
import { BusinessUnitDetails } from './admin-user/business-unit-master/business-unit-details/business-unit-details';
import { AddCode } from './admin-user/code-master/add-code/add-code';
import { CodeDetails } from './admin-user/code-master/code-details/code-details';
import { Reports } from './reports-alerts/reports/reports';
import { ActivePoliciesReport } from './reports-alerts/reports/active-policies-report/active-policies-report';
import { Alerts } from './reports-alerts/alerts/alerts';
import { UserProfile } from './user-profile/user-profile';

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
      { path: 'admin-user/approval-master/add-approval', component: AddApproval },
      { path: 'admin-user/approval-master/edit-approval', component: AddApproval },
      { path: 'admin-user/approval-master/approval-details', component: ApprovalDetails },

      { path: 'admin-user/business-unit-master', component: BusinessUnitMaster },
      { path: 'admin-user/business-unit-master/add-business-unit', component: AddBusinessUnit },
      { path: 'admin-user/business-unit-master/edit-business-unit', component: AddBusinessUnit },
      {
        path: 'admin-user/business-unit-master/business-unit-details',
        component: BusinessUnitDetails,
      },

      { path: 'admin-user/code-master', component: CodeMaster },
      { path: 'admin-user/code-master/add-code', component: AddCode },
      { path: 'admin-user/code-master/edit-code', component: AddCode },
      { path: 'admin-user/code-master/code-details', component: CodeDetails },

      /*Master User*/
      { path: 'masters/insurance-companies', component: InsuranceCompanies },
      { path: 'masters/insurance-companies/add-company', component: AddCompany },
      { path: 'masters/insurance-companies/edit-company', component: AddCompany },
      { path: 'masters/insurance-companies/company-details', component: CompanyDetails },
      { path: 'masters/asset-master', component: AssetMaster },
      { path: 'masters/asset-master/add-asset', component: AddAsset },
      { path: 'masters/asset-master/edit-asset', component: AddAsset },
      { path: 'masters/asset-master/asset-details', component: AssetDetails },

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
      { path: 'claims/claims-approvals/claims-aaproval-details', component: ClaimsApprovalDetails },
      { path: 'claims/claims-payments-clousers', component: ClaimsPaymentsClosures },
      { path: 'claims/claims-payments-clousers/closure-details', component: ClosureDetails },

      /*Reports & Alerts*/
      { path: 'reports-alerts/reports', component: Reports },
      { path: 'reports-alerts/reports/active-policies-report', component: ActivePoliciesReport },
      { path: 'reports-alerts/alerts', component: Alerts },

      /* User Profile*/
      { path: 'user', component: UserProfile },

      // You can add other feature modules here later
      // { path: 'admin', loadChildren: () => import('../admin/admin.routes').then(m => m.ADMIN_ROUTES) },
    ],
  },
];
