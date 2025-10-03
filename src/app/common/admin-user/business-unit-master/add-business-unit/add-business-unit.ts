import { Component, inject } from '@angular/core';
import { CustomInput } from '../../../../shared/components/custom-input/custom-input';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomSelect } from '../../../../shared/components/custom-select/custom-select';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { ConfirmationDialog } from '../../../../shared/dialogues/confirmation-dialogue';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CustomTextarea } from '../../../../shared/components/custom-textarea/custom-textarea';
import { PageHeader } from '../../../../shared/components/page-header/page-header';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'add-business-unit',
  imports: [
    CustomInput,
    CustomCard,
    ReactiveFormsModule,
    CustomSelect,
    CustomTextarea,
    CustomButton,
    PageHeader,
  ],
  templateUrl: './add-business-unit.html',
})
export class AddBusinessUnit {
  constructor(private dialog: MatDialog, private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  /** Date handling */
  today = new Date();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  /** Form */
  form = new FormGroup({
    companyCode: new FormControl('', Validators.required),
    Roles: new FormControl<string | null>('', Validators.required),
    policyStartDate: new FormControl('', Validators.required),
    policyEndDate: new FormControl(''),
  });

  /** File Upload */
  onFilesChanged(files: File[]) {
    console.log('Uploaded files:', files);
  }

  /** Roles dropdown */
  roles: Role[] = [
    { value: 'unit-user', viewValue: 'Unit User' },
    { value: 'head', viewValue: 'Unit Head (HOD)' },
    { value: 'insurance-coordinator', viewValue: 'Insurance Coordinator' },
    { value: 'insurance-manager', viewValue: 'Insurance Manager' },
    { value: 'finance', viewValue: 'Finance' },
  ];
  selectedRole: string = '';

  get policyStartControl(): FormControl {
    return this.form.get('policyStartDate') as FormControl;
  }

  get policyEndControl(): FormControl {
    return this.form.get('policyEndDate') as FormControl;
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

  /* snackbar */
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['center-snackbar'],
    });
  }
}
