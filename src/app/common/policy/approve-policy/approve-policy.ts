import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { CustomButton } from '../../../shared/components/custom-button/custom-button';
import { Router } from '@angular/router';

export interface PeriodicElement {
  policyNumber: string;
  insuranceCompany: string;
  policyType: string;
  sumInsured: string;
  businessUnit: string;
  expiryDate: string;
  approvalStatus:
    | 'requestGenerated'
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'requested'
    | 'inprogress'
    | 'closed';
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    policyNumber: '#PLY 865',
    insuranceCompany: 'AIG',
    policyType: 'Vehicle',
    sumInsured: 'AED 10,000',
    businessUnit: 'Dubai H.O',
    expiryDate: '18/08/2026',
    approvalStatus: 'requestGenerated',
  },
];
@Component({
  selector: 'app-approve-policy',
  imports: [
    CommonModule,
    FormsModule,
    MatIconButton,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    CustomButton,
    CustomCard,
    MatButton,
  ],
  templateUrl: './approve-policy.html',
  styleUrl: './approve-policy.scss',
})
export class ApprovePolicy {
  @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  filters = {
    vehicle: false,
    building: false,
    fire: false,
    marine: false,
    others: false,
    submitted: false,
    inreview: false,
    approve: false,
    rejected: false,
    paid: false,
    closed: false,
  };

  applyFilters(menuTrigger: MatMenuTrigger) {
    console.log('Filters applied', this.filters);
    menuTrigger.closeMenu();
  }

  displayedColumns: string[] = [
    'policyNumber',
    'insuranceCompany',
    'policyType',
    'sumInsured',
    'businessUnit',
    'expiryDate',
    'approvalStatus',
  ];

  dataSource = ELEMENT_DATA;
}
