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
  activePolicy: string;
  expiryDate: string;
  sumInsured: string;
  PremiumAmt: string;
  insCompany: string;
  format: 'pdf' | 'xls' | 'csv';
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    activePolicy: 'Asset & Liability',
    expiryDate: '16 Aug 2025',
    sumInsured: 'AED 25000',
    PremiumAmt: 'AED 50000',
    insCompany: 'AIG',
    format: 'pdf',
    action: '',
  },
];
@Component({
  selector: 'reports',
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
    PageHeader,
  ],
  templateUrl: './reports.html',
})
export class Reports {
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
    'activePolicy',
    'expiryDate',
    'sumInsured',
    'PremiumAmt',
    'insCompany',
    'format',
    'action',
  ];

  dataSource = ELEMENT_DATA;
}
