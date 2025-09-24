import { Component, Input } from '@angular/core';
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
    WizardSteps,
  ],
  templateUrl: './approve-policy-details.html',
  styleUrl: './approve-policy-details.scss',
  standalone: true,
})
export class ApprovePolicyDetails {
  // dialogue
  constructor(private dialog: MatDialog, private location: Location, private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  openConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: { message: 'Are you sure  you want to Approve this Policy?' },
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
