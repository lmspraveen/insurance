import { Component, inject, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInput } from '../../../shared/components/custom-input/custom-input';
import { CustomSelect } from '../../../shared/components/custom-select/custom-select';
import { CustomTextarea } from '../../../shared/components/custom-textarea/custom-textarea';
import { CustomButton } from '../../../shared/components/custom-button/custom-button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { CustomDatepicker } from '../../../shared/components/custom-datepicker/custom-datepicker';
import { CustomFileUpload } from '../../../shared/components/custom-file-upload/custom-file-upload';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-invoice',
  imports: [
    MatIconButton,
    CommonModule,
    ReactiveFormsModule,
    CustomInput,
    CustomSelect,
    CustomTextarea,
    CustomButton,
    CustomCard,
    CustomDatepicker,
    CustomFileUpload,
  ],
  templateUrl: './create-invoice.html',
})
export class CreateInvoice {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  @Input() pincodeControl!: any;
  @Input() showResult!: any;
  @Input() activeTab!: string;

  /** Date handling */
  today = new Date();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  /** Form */
  form = new FormGroup({
    companyCode: new FormControl('', Validators.required),
    branchCode: new FormControl('', Validators.required),
    divisionCode: new FormControl('', Validators.required),
    locationCode: new FormControl('', Validators.required),
    requestNumber: new FormControl('', Validators.required),
    requesterName: new FormControl('', Validators.required),
    sumInsured: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    Name: new FormControl<string | null>('', Validators.required),
    Roles: new FormControl<string | null>('', Validators.required),
    CPassword: new FormControl<string | null>('', Validators.required),
    NPassword: new FormControl<string | null>('', Validators.required),
    policyStartDate: new FormControl('', Validators.required),
    policyEndDate: new FormControl(''),
  });

  get policyStartControl(): FormControl {
    return this.form.get('policyStartDate') as FormControl;
  }

  get policyEndControl(): FormControl {
    return this.form.get('policyEndDate') as FormControl;
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

  /** Policies Chips */
  selectedPolicies = [
    { id: 1, label: 'Vehicle Insurance' },
    { id: 2, label: 'Asset & Liability Protection' },
    { id: 3, label: 'Crime Insurance' },
  ];

  removePolicy(id: number | string) {
    this.selectedPolicies = this.selectedPolicies.filter((policy) => policy.id !== id);
  }

  /** File Upload */
  onFilesChanged(files: File[]) {
    console.log('Uploaded files:', files);
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
