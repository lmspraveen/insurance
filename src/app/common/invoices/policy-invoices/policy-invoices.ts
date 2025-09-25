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
  invoiceId: string;
  amount: string;
  invoiceDate: string;
  uploadedBy: string;
  paymentStatus: 'paid' | 'unpaid' | 'hold';
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    invoiceId: '#INV008645',
    amount: '1000',
    invoiceDate: '18/08/2025',
    uploadedBy: 'John Doe',
    paymentStatus: 'paid',
    action: '',
  },
  {
    invoiceId: '#INV008684',
    amount: '5000',
    invoiceDate: '22/09/2026',
    uploadedBy: 'Mark Steve',
    paymentStatus: 'unpaid',
    action: '',
  },
  {
    invoiceId: '#INV008715',
    amount: '7000',
    invoiceDate: '05/06/2024',
    uploadedBy: 'Steve Bran',
    paymentStatus: 'hold',
    action: '',
  },
];

@Component({
  selector: 'app-policy-invoices',
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
  templateUrl: './policy-invoices.html',
  styleUrls: ['./policy-invoices.scss'],
})
export class PolicyInvoices {
  @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  displayedColumns: string[] = [
    'invoiceId',
    'amount',
    'invoiceDate',
    'uploadedBy',
    'paymentStatus',
    'action',
  ];

  dataSource = ELEMENT_DATA;
}
