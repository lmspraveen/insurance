import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButton } from '../../../shared/components/custom-button/custom-button';
import { CustomInput } from '../../../shared/components/custom-input/custom-input';
import { CustomSelect } from '../../../shared/components/custom-select/custom-select';
import { CustomChips } from '../../../shared/components/custom-chips/custom-chips';
import { CustomTextarea } from '../../../shared/components/custom-textarea/custom-textarea';
import { NewRequest } from './new-request/new-request';

interface Roles {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create-policy-request',
  standalone: true,
  imports: [
    MatIconButton,
    CustomCard,
    ReactiveFormsModule,
    CustomInput,
    CommonModule,
    CustomButton,
    // CustomSelect,
    // CustomChips,
    // CustomTextarea,
    NewRequest,
  ],
  templateUrl: './create-policy-request.html',
  styleUrl: './create-policy-request.scss',
})
export class CreatePolicyRequest {
  activeTab: string = 'tab1';
  showResult: boolean = false;
  pincodeControl = new FormControl('');

  toggleTab(tab: string) {
    this.activeTab = tab;
    this.showResult = false;
    this.pincodeControl.setValue('');
  }

  submitPincode() {
    if (this.pincodeControl.value?.trim()) {
      this.showResult = true;
    }
  }

  /*Tab 1 Data and functions*/

  selectedRole: string = '';
  roles: Roles[] = [
    { value: 'unit-user', viewValue: 'Unit User' },
    { value: 'head', viewValue: 'Unit Head (HOD)' },
    { value: 'insurance-coordinator', viewValue: 'Insurance Coordinator' },
    { value: 'insurance-manager', viewValue: 'Insurance Manager' },
    { value: 'finance', viewValue: 'Finance' },
  ];

  get policyStartControl(): FormControl {
    return this.form.get('policyStartDate') as FormControl;
  }

  get policyEndControl(): FormControl {
    return this.form.get('policyEndDate') as FormControl;
  }

  form = new FormGroup({
    Name: new FormControl<string | null>('', Validators.required),
    Roles: new FormControl<string | null>('', Validators.required),
    CPassword: new FormControl<string | null>('', Validators.required),
    NPassword: new FormControl<string | null>('', Validators.required),
    policyStartDate: new FormControl('', Validators.required),
    policyEndDate: new FormControl(''),
  });

  today = new Date();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  submitForm() {
    console.log(this.form.value);
  }

  /* chips */
  selectedPolicies = [
    { id: 1, label: 'Vehicle Insurance' },
    { id: 2, label: 'Asset & Liability Protection' },
    { id: 3, label: 'Crime Insurance' },
  ];

  removePolicy(id: number | string) {
    this.selectedPolicies = this.selectedPolicies.filter((policy) => policy.id !== id);
  }

  handleRemove(event: any) {
    console.log('Item removed:', event);
    // perform actual remove logic here
  }
}
