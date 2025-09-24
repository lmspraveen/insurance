import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { CustomChips } from '../../../../shared/components/custom-chips/custom-chips';
import { CustomTextarea } from '../../../../shared/components/custom-textarea/custom-textarea';
import { CustomDatepicker } from '../../../../shared/components/custom-datepicker/custom-datepicker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { ConfirmationDialog } from '../../../../shared/dialogues/confirmation-dialogue';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-renew-policy',
  imports: [MatIconButton, CustomCard, CustomChips, CustomTextarea, CustomDatepicker, CustomButton],
  templateUrl: './edit-renew-policy.html',
})
export class EditRenewPolicy {
  @Input() pincodeControl!: any;

  /** Date handling */
  today = new Date();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  /** Form */
  form = new FormGroup({
    policyStartDate: new FormControl('', Validators.required),
    policyEndDate: new FormControl(''),
  });

  get policyStartControl(): FormControl {
    return this.form.get('policyStartDate') as FormControl;
  }

  get policyEndControl(): FormControl {
    return this.form.get('policyEndDate') as FormControl;
  }

  constructor(private router: Router, private dialog: MatDialog) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  /** Policies Chips */
  selectedPolicies = [
    { id: 1, label: 'Vehicle Insurance' },
    { id: 2, label: 'Asset & Liability Protection' },
    { id: 3, label: 'Crime Insurance' },
  ];

  selectedAssets = [
    { id: 1, label: 'Building 15' },
    { id: 2, label: 'Toyota Corolla 2022' },
  ];

  removePolicy(id: number | string) {
    this.selectedPolicies = this.selectedPolicies.filter((policy) => policy.id !== id);
  }

  removeAssets(id: number | string) {
    this.selectedAssets = this.selectedAssets.filter((policy) => policy.id !== id);
  }

  // confirmation modal
  openConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: { message: 'Are you sure  you want to renew the policy?' },
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
