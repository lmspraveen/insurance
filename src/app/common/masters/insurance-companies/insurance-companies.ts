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
  sNo: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  licenseDocument: string;
  status:
    | 'active'
    | 'inactive'
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'requested'
    | 'inprogress'
    | 'closed';
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    sNo: '01',
    companyName: 'AIG',
    contactPerson: 'John Doe',
    email: 'sudeep.pavithran@alshirawi.ae',
    phoneNumber: '+971504478956',
    licenseDocument: 'pdf',
    status: 'active',
    action: '',
  },
  {
    sNo: '02',
    companyName: 'AIG',
    contactPerson: 'John Doe',
    email: 'sudeep.pavithran@alshirawi.ae',
    phoneNumber: '+971504478956',
    licenseDocument: 'pdf',
    status: 'inactive',
    action: '',
  },
];

@Component({
  selector: 'app-insurance-companies',
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
  ],
  templateUrl: './insurance-companies.html',
  styleUrls: ['./insurance-companies.scss'],
})
export class InsuranceCompanies {
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
    'companyName',
    'contactPerson',
    'email',
    'phoneNumber',
    'licenseDocument',
    'status',
    'action',
  ];

  dataSource = ELEMENT_DATA;

  applyFilters(menuTrigger: MatMenuTrigger) {
    console.log('Filters applied', this.filters);
    menuTrigger.closeMenu();
  }
}
