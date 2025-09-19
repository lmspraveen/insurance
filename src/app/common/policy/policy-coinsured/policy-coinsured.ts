import { Component, ViewChild } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { CustomButton } from '../../../shared/components/custom-button/custom-button';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatList, MatListItem } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
export interface PeriodicElement {
  companyCode: string;
  policyNumber: string;
  coinsuredCompany: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'pending' | 'approved' | 'rejected' | 'requested' | 'inprogress';
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    companyCode: '02154',
    policyNumber: '01245',
    coinsuredCompany: '01245',
    startDate: '18/08/2025',
    endDate: '18/08/2026',
    status: 'active',
    action: '',
  },
];

@Component({
  selector: 'policy-coinsured',
  imports: [
    MatIconButton,
    CustomButton,
    CustomCard,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatCheckbox,
    MatCheckboxModule,
    MatList,
    MatListItem,
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './policy-coinsured.html',
  styleUrl: './policy-coinsured.scss',
})
export class PolicyCoinsured {
  @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;
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

  applyFilters(menuTrigger: any) {
    console.log('Filters applied', this.filters);
    menuTrigger.closeMenu();
  }

  displayedColumns: string[] = [
    'companyCode',
    'policyNumber',
    'coinsuredCompany',
    'startDate',
    'endDate',
    'status',
    'action',
  ];
  dataSource = ELEMENT_DATA;
}
