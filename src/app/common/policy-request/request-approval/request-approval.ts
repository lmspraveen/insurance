import { Component } from '@angular/core';
import { WizardSteps } from '../../../shared/components/wizard-steps/wizard-steps';
import { CustomFileUpload } from '../../../shared/components/custom-file-upload/custom-file-upload';
import { CustomTextarea } from '../../../shared/components/custom-textarea/custom-textarea';
import { CustomButton } from '../../../shared/components/custom-button/custom-button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../../shared/dialogues/confirmation-dialogue';
import { Router } from '@angular/router';

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
  templateUrl: './request-approval.html',
  styleUrl: './request-approval.scss',
})
export class RequestApproval {
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

  /** File Upload */
  onFilesChanged(files: File[]) {
    console.log('Uploaded files:', files);
    // handle logic (add to state, validate file types, etc.)
  }
}
