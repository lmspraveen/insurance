import { Component } from '@angular/core';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { MatTableModule } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';

export interface PeriodicElement {
  requestId: string;
  employeeId: string;
  date: string;
  requestType: string;
  businessUnit: string;
  pendingAt: string;
  approvalStatus: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    requestId: '#REQ001',
    employeeId: 'EMP001',
    date: '16 Jul 25',
    requestType: 'NEW',
    businessUnit: 'Dubai H.O',
    pendingAt: 'Unit HOD',
    approvalStatus: '',
  },
  {
    requestId: '#REQ001',
    employeeId: 'EMP001',
    date: '16 Jul 25',
    requestType: 'NEW',
    businessUnit: 'Dubai H.O',
    pendingAt: 'Unit HOD',
    approvalStatus: '',
  },
  {
    requestId: '#REQ001',
    employeeId: 'EMP001',
    date: '16 Jul 25',
    requestType: 'NEW',
    businessUnit: 'Dubai H.O',
    pendingAt: 'Unit HOD',
    approvalStatus: '',
  },
  {
    requestId: '#REQ001',
    employeeId: 'EMP001',
    date: '16 Jul 25',
    requestType: 'NEW',
    businessUnit: 'Dubai H.O',
    pendingAt: 'Unit HOD',
    approvalStatus: '',
  },
];
@Component({
  selector: 'app-approve-request',
  imports: [CustomCard, MatTableModule, MatIconButton],
  templateUrl: './approve-request.html',
  styleUrl: './approve-request.scss',
})
export class ApproveRequest {
  displayedColumns: string[] = [
    'requestId',
    'employeeId',
    'date',
    'requestType',
    'businessUnit',
    'pendingAt',
    'approvalStatus',
  ];
  dataSource = ELEMENT_DATA;
}
