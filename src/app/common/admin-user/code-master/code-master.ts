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
  codeType: string;
  codeValue: string;
  shortDesc: string;
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
    codeType: 'Company',
    codeValue: '01245',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .',
    status: 'active',
    action: '',
  },
  {
    sNo: '02',
    codeType: 'Company',
    codeValue: '01245',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .',
    status: 'inactive',
    action: '',
  },
];

@Component({
  selector: 'app-code-master',
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
  templateUrl: './code-master.html',
  styleUrls: ['./code-master.scss'],
})
export class CodeMaster {
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

  displayedColumns: string[] = ['sNo', 'codeType', 'codeValue', 'shortDesc', 'status', 'action'];

  dataSource = ELEMENT_DATA;

  applyFilters(menuTrigger: MatMenuTrigger) {
    console.log('Filters applied', this.filters);
    menuTrigger.closeMenu();
  }
}
