import { Component, Input, TemplateRef } from '@angular/core';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { ConfirmationDialog } from '../../../shared/dialogues/confirmation-dialogue';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

export interface PeriodicElement {
  requestId: string;
  employeeId: string;
  date: string;
  requestType: string;
  businessUnit: string;
  pendingAt: string;
  approvalStatus: 'pending' | 'approved' | 'rejected' | 'requested' | 'inprogress';
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    requestId: '#REQ001',
    employeeId: 'EMP001',
    date: '16 Jul 25',
    requestType: 'NEW',
    businessUnit: 'Dubai H.O',
    pendingAt: 'Unit HOD',
    approvalStatus: 'approved',
  },
  {
    requestId: '#REQ001',
    employeeId: 'EMP001',
    date: '16 Jul 25',
    requestType: 'NEW',
    businessUnit: 'Dubai H.O',
    pendingAt: 'Unit HOD',
    approvalStatus: 'inprogress',
  },
  {
    requestId: '#REQ001',
    employeeId: 'EMP001',
    date: '16 Jul 25',
    requestType: 'NEW',
    businessUnit: 'Dubai H.O',
    pendingAt: 'Unit HOD',
    approvalStatus: 'pending',
  },
  {
    requestId: '#REQ001',
    employeeId: 'EMP001',
    date: '16 Jul 25',
    requestType: 'NEW',
    businessUnit: 'Dubai H.O',
    pendingAt: 'Unit HOD',
    approvalStatus: 'requested',
  },
];

@Component({
  selector: 'app-approve-request',
  imports: [CustomCard, MatTableModule, MatIconButton, MatButtonModule],
  templateUrl: './approve-request.html',
  styleUrl: './approve-request.scss',
  standalone: true,
})
export class ApproveRequest {
  // main table
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

  // dialogue
  constructor(private dialog: MatDialog, private location: Location, private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  openConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: { message: 'Are you sure  you want to approve this policy?' },
      width: '537px',
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        console.log('✅ User clicked YES');
      } else {
        console.log('❌ User clicked NO');
      }
    });
  }

  /* wizard */
  goToBack() {
    this.location.back();
  }

  /** File Upload */
  onFilesChanged(files: File[]) {
    console.log('Uploaded files:', files);
    // handle logic (add to state, validate file types, etc.)
  }
}
