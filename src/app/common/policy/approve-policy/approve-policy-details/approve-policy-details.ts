import { Component, Input, TemplateRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { CustomFileUpload } from '../../../../shared/components/custom-file-upload/custom-file-upload';
import { CustomTextarea } from '../../../../shared/components/custom-textarea/custom-textarea';
import { WizardSteps } from '../../../../shared/components/wizard-steps/wizard-steps';
import { ConfirmationDialog } from '../../../../shared/dialogues/confirmation-dialogue';
import { ContentDialog } from '../../../../shared/dialogues/content-dialogue';

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
  selector: 'app-request-approval',
  imports: [
    CustomCard,
    MatTableModule,
    MatIconButton,
    MatButtonModule,
    CustomButton,
    CustomFileUpload,
    CustomTextarea,
  ],
  templateUrl: './approve-policy-details.html',
  styleUrl: './approve-policy-details.scss',
  standalone: true,
})
export class ApprovePolicyDetails {
  // dialogue
  displayedColumns: string[] = [
    'Sno',
    'eventDate',
    'eventTime',
    'eventType',
    'eventById',
    'evnetName',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog, private location: Location, private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
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
      data: { message: 'Are you sure you want to approve this policy?' },
      width: '787px',
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
