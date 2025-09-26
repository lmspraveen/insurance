import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { CustomChips } from '../../../../shared/components/custom-chips/custom-chips';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomInput } from '../../../../shared/components/custom-input/custom-input';
import { CustomTextarea } from '../../../../shared/components/custom-textarea/custom-textarea';
import { CustomFileUpload } from '../../../../shared/components/custom-file-upload/custom-file-upload';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../../../shared/dialogues/confirmation-dialogue';
import { CustomSelect } from '../../../../shared/components/custom-select/custom-select';
import { CustomDatepicker } from '../../../../shared/components/custom-datepicker/custom-datepicker';

interface settlementCurrency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'closure-details',
  imports: [
    MatIconButton,
    CustomCard,
    CustomChips,
    CustomInput,
    CustomTextarea,
    CustomFileUpload,
    CustomButton,
    CustomSelect,
    CustomDatepicker,
  ],
  templateUrl: './closure-details.html',
})
export class ClosureDetails {
  constructor(private dialog: MatDialog, private router: Router) {}

  /** Form */
  form = new FormGroup({
    settlementAmount: new FormControl('', Validators.required),
    settlementCurrency: new FormControl('', Validators.required),
    settlementDate: new FormControl('', Validators.required),
    settlementCurrencies: new FormControl<string | null>('', Validators.required),
    settlementDateControl: new FormControl('', Validators.required),
  });

  /** Roles dropdown */
  settlementCurrency: any = [
    { value: 'unit-user', viewValue: 'Unit User' },
    { value: 'head', viewValue: 'Unit Head (HOD)' },
    { value: 'insurance-coordinator', viewValue: 'Insurance Coordinator' },
    { value: 'insurance-manager', viewValue: 'Insurance Manager' },
    { value: 'finance', viewValue: 'Finance' },
  ];
  selectedSettlementCurrency: string = '';

  get settlementDateControl(): FormControl {
    return this.form.get('settlementDateControl') as FormControl;
  }

  /** File Upload */
  onFilesChanged(files: File[]) {
    console.log('Uploaded files:', files);
    // handle logic (add to state, validate file types, etc.)
  }

  /** Form Submit */
  submitForm() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      console.log('Form Invalid');
      this.form.markAllAsTouched();
    }
  }

  /** Open dialog * */
  openConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: { message: 'Are you sure  you want to make the changes?' },
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

  goTo(path: string) {
    this.router.navigate([path]);
  }

  selectedAssets = [
    { id: 1, label: 'Building 15' },
    { id: 2, label: 'Toyota Corolla 2022' },
  ];

  removeAssets(id: number | string) {
    this.selectedAssets = this.selectedAssets.filter((policy) => policy.id !== id);
  }
}
