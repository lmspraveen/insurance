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
  branchCode: string;
  locationCode: string;
  divisionCode: string;
  status: 'accepted' | 'denied';
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    sNo: '01',
    businessUnit: 'Dubai H.O',
    branchCode: '01245',
    locationCode: '74695',
    divisionCode: '74695',
    status: 'denied',
    action: '',
  },
  {
    sNo: '02',
    businessUnit: 'Dubai H.O',
    branchCode: '01245',
    locationCode: '74695',
    divisionCode: '74695',
    status: 'accepted',
    action: '',
  },
];

@Component({
  selector: 'approval-master',
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
  templateUrl: './approval-master.html',
  styleUrls: ['./approval-master.scss'],
})
export class ApprovalMaster {
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
    'branchCode',
    'locationCode',
    'divisionCode',
    'status',
    'action',
  ];

  dataSource = ELEMENT_DATA;

  applyFilters(menuTrigger: MatMenuTrigger) {
    console.log('Filters applied', this.filters);
    menuTrigger.closeMenu();
  }
}
