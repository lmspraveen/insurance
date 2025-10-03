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
  assetId: string;
  assetType: string;
  makeModel: string;
  regNumber: string;
  assetCurrency: string;
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
    assetId: '01245',
    assetType: 'Vehicle',
    makeModel: '2020',
    regNumber: '1456278',
    assetCurrency: 'AED',
    status: 'active',
    action: '',
  },
  {
    sNo: '02',
    assetId: '01245',
    assetType: 'Vehicle',
    makeModel: '2020',
    regNumber: '1456278',
    assetCurrency: 'AED',
    status: 'inactive',
    action: '',
  },
];

@Component({
  selector: 'app-asset-master',
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
  templateUrl: './asset-master.html',
  styleUrls: ['./asset-master.scss'],
})
export class AssetMaster {
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
    'assetId',
    'assetType',
    'makeModel',
    'regNumber',
    'assetCurrency',
    'status',
    'action',
  ];

  dataSource = ELEMENT_DATA;

  applyFilters(menuTrigger: MatMenuTrigger) {
    console.log('Filters applied', this.filters);
    menuTrigger.closeMenu();
  }
}
