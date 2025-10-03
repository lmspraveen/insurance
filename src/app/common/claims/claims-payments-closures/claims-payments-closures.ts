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
import { PageHeader } from '../../../shared/components/page-header/page-header';

export interface PeriodicElement {
  claimId: string;
  incidentDateTime: string;
  incidentLocation: string;
  estClaimAmt: string;
  claimStatus:
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
    claimId: '#CLM753',
    incidentDateTime: '18/08/2026',
    incidentLocation: 'Sky Courts, Dubai',
    estClaimAmt: '10,000',
    claimStatus: 'approved',
  },
];
@Component({
  selector: 'app-claims-payments-closures',
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
    PageHeader,
  ],
  templateUrl: './claims-payments-closures.html',
})
export class ClaimsPaymentsClosures {
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
    'claimId',
    'incidentDateTime',
    'incidentLocation',
    'estClaimAmt',
    'claimStatus',
  ];

  dataSource = ELEMENT_DATA;
}
