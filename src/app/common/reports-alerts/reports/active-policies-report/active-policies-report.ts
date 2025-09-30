import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { ContentDialog } from '../../../../shared/dialogues/content-dialogue';
import { MatDialog } from '@angular/material/dialog';
import { CustomTextarea } from '../../../../shared/components/custom-textarea/custom-textarea';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'active-policies-report',
  imports: [MatIconButton, CustomCard, CustomTextarea, MatButton],
  templateUrl: './active-policies-report.html',
})
export class ActivePoliciesReport {
  constructor(private router: Router, private dialog: MatDialog) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  /** Form */
  form = new FormGroup({
    policyStartDate: new FormControl('', Validators.required),
  });

  get policyStartControl(): FormControl {
    return this.form.get('policyStartDate') as FormControl;
  }

  /* dialogue */
  openTemplateDialog(template: TemplateRef<any>) {
    const dialogRef = this.dialog.open(ContentDialog, {
      data: {
        template,
        cancelText: 'Cancel',
        confirmText: 'Deactivate',
        customButtons: false,
      },
      width: '787px',
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
}
