import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { CustomChips } from '../../../../shared/components/custom-chips/custom-chips';
import { ContentDialog } from '../../../../shared/dialogues/content-dialogue';
import { MatDialog } from '@angular/material/dialog';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { MatTableModule } from '@angular/material/table';
import { CustomTextarea } from '../../../../shared/components/custom-textarea/custom-textarea';
import { ConfirmationDialog } from '../../../../shared/dialogues/confirmation-dialogue';
import { WizardSteps } from '../../../../shared/components/wizard-steps/wizard-steps';

export interface PeriodicElement {
  Sno: string;
  eventDate: string;
  eventTime: string;
  eventType: string;
  eventById: string;
  evnetName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Sno: '#REQ001',
    eventDate: '16 Jul 25',
    eventTime: '10:00:12',
    eventType: 'NEW',
    eventById: '001',
    evnetName: 'New Request',
  },
];

@Component({
  selector: 'claims-approval-details',
  imports: [
    MatIconButton,
    CustomCard,
    CustomChips,
    CustomButton,
    MatTableModule,
    CustomTextarea,
    WizardSteps,
  ],
  templateUrl: './claims-approval-details.html',
})
export class ClaimsApprovalDetails {
  constructor(private dialog: MatDialog, private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
  /** table */
  // dialogue table
  displayedColumns: string[] = [
    'Sno',
    'eventDate',
    'eventTime',
    'eventType',
    'eventById',
    'evnetName',
  ];
  dataSource = ELEMENT_DATA;

  /* chips */
  selectedAssets = [
    { id: 1, label: 'Building 15' },
    { id: 2, label: 'Toyota Corolla 2022' },
  ];

  removeAssets(id: number | string) {
    this.selectedAssets = this.selectedAssets.filter((policy) => policy.id !== id);
  }

  openTemplateDialog(template: TemplateRef<any>) {
    const dialogRef = this.dialog.open(ContentDialog, {
      data: {
        template,
        cancelText: 'Cancel',
        confirmText: 'Close',
        customButtons: false,
      },
      width: '1024px',
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('User clicked Confirm');
      } else {
        console.log('User clicked Cancel or closed dialog');
      }
    });
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
}
