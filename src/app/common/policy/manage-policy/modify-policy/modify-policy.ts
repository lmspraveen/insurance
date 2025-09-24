import { Component, Input, TemplateRef } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInput } from '../../../../shared/components/custom-input/custom-input';
import { CustomSelect } from '../../../../shared/components/custom-select/custom-select';
import { CustomTextarea } from '../../../../shared/components/custom-textarea/custom-textarea';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { CustomDatepicker } from '../../../../shared/components/custom-datepicker/custom-datepicker';
import { CustomFileUpload } from '../../../../shared/components/custom-file-upload/custom-file-upload';
import { CustomChips } from '../../../../shared/components/custom-chips/custom-chips';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { ContentDialog } from '../../../../shared/dialogues/content-dialogue';
import { DialogRef } from '@angular/cdk/dialog';
import { ConfirmationDialog } from '../../../../shared/dialogues/confirmation-dialogue';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  modifiedBy: string;
  employeeId: string;
  Date: string;
  Time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    modifiedBy: 'John Doe',
    employeeId: '2625349',
    Date: '16 Jul 2025',
    Time: '11:15:32',
  },
];

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modify-policy',
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
    CustomChips,
    MatButton,
    MatTableModule,
  ],
  templateUrl: './modify-policy.html',
})
export class ModifyPolicy {
  @Input() pincodeControl!: any;
  @Input() showResult!: any;
  @Input() activeTab!: string;

  constructor(private router: Router, private dialog: MatDialog) {}

  displayedColumns: string[] = ['modifiedBy', 'employeeId', 'Date', 'Time'];
  dataSource = ELEMENT_DATA;

  goTo(path: string) {
    this.router.navigate([path]);
  }

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

  /* dialogue */
  openTemplateDialog(template: TemplateRef<any>) {
    const dialogRef = this.dialog.open(ContentDialog, {
      data: {
        template,
        cancelText: 'Cancel',
        confirmText: 'Close',
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

  openConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: { message: 'Are you sure you want to make the changes?' },
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

  doSomething() {
    alert('Button clicked!');
  }
}
