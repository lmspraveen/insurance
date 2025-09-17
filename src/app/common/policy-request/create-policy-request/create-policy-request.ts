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
import { RequestTypeTabs } from './request-type-tabs/request-type-tabs';

@Component({
  selector: 'create-policy-request',
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
    RequestTypeTabs,
  ],
  templateUrl: './create-policy-request.html',
  styleUrl: './create-policy-request.scss',
})
export class CreatePolicyRequest {
  activeTab: string = '';
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
}
