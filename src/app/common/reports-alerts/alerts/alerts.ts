import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
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
  alertId: string;
  dateTime: string;
  message: string;
  module: string;
  referenceId: string;
  alertType: string;
  status: 'unread' | 'read';
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    alertId: '#ALT-001',
    dateTime: '31 JUL 25 11:15',
    message: 'Policy POL-VEH-203 is expiring in 5 days',
    module: 'Vehicle',
    referenceId: 'POL-VEH-203',
    alertType: 'Policy Expiry',
    status: 'unread',
    action: '',
  },
  {
    alertId: '#ALT-002',
    dateTime: '31 JUL 25 11:15',
    message: 'Policy POL-VEH-203 is expiring in 5 days',
    module: 'Vehicle',
    referenceId: 'POL-VEH-203',
    alertType: 'Policy Expiry',
    status: 'read',
    action: '',
  },
];
@Component({
  selector: 'alerts',
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
  ],
  templateUrl: './alerts.html',
})
export class Alerts {
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
    'alertId',
    'dateTime',
    'message',
    'module',
    'referenceId',
    'alertType',
    'status',
    'action',
  ];

  dataSource = ELEMENT_DATA;
}
