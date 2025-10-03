import { Component } from '@angular/core';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButton } from '../../../shared/components/custom-button/custom-button';
import { CustomInput } from '../../../shared/components/custom-input/custom-input';
import { RequestTypeTabs } from './request-type-tabs/request-type-tabs';
import { PageHeader } from '../../../shared/components/page-header/page-header';

@Component({
  selector: 'create-policy-request',
  standalone: true,
  imports: [
    CustomCard,
    ReactiveFormsModule,
    CustomInput,
    CommonModule,
    CustomButton,
    RequestTypeTabs,
    PageHeader,
  ],
  templateUrl: './create-policy-request.html',
  styleUrl: './create-policy-request.scss',
})
export class CreatePolicyRequest {
  activeTab: string = 'newRequest';
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
