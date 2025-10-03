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
import { PageHeader } from '../../../shared/components/page-header/page-header';

export interface PeriodicElement {
  sNo: string;
  businessUnit: string;
  location: string;
  unitHead: string;
  totalAssets: string;
  status: 'accepted' | 'denied';
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    sNo: '02',
    businessUnit: 'Dubai H.O',
    location: 'Dubai',
    unitHead: 'Ali Khan',
    totalAssets: '4',
    status: 'denied',
    action: '',
  },
  {
    sNo: '01',
    businessUnit: 'Dubai H.O',
    location: 'South Arabia',
    unitHead: 'Ali Khan',
    totalAssets: '4',
    status: 'accepted',
    action: '',
  },
];

@Component({
  selector: 'business-unit-master',
  standalone: true,
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
  templateUrl: './business-unit-master.html',
  styleUrls: ['./business-unit-master.scss'],
})
export class BusinessUnitMaster {
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

  displayedColumns: string[] = [
    'sNo',
    'businessUnit',
    'location',
    'unitHead',
    'totalAssets',
    'status',
    'action',
  ];

  dataSource = ELEMENT_DATA;

  applyFilters(menuTrigger: MatMenuTrigger) {
    console.log('Filters applied', this.filters);
    menuTrigger.closeMenu();
  }
}
