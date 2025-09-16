import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomInput } from '../../../../shared/components/custom-input/custom-input';
import { CustomSelect } from '../../../../shared/components/custom-select/custom-select';
import { CustomTextarea } from '../../../../shared/components/custom-textarea/custom-textarea';
import { CustomChips } from '../../../../shared/components/custom-chips/custom-chips';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { CustomDatepicker } from '../../../../shared/components/custom-datepicker/custom-datepicker';

@Component({
  selector: 'new-request',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomInput,
    CustomSelect,
    CustomTextarea,
    CustomChips,
    CustomButton,
    CustomCard,
    CustomDatepicker,
  ],
  templateUrl: './new-request.html',
})
export class NewRequest {
  @Input() pincodeControl!: any;
  @Input() roles: any[] = [];
  @Input() selectedRole!: any;
  @Input() selectedPolicies: any[] = [];
  @Input() form!: any;
  @Input() policyStartControl!: FormControl;
  @Input() policyEndControl!: FormControl;

  today = new Date();

  @Output() removenew = new EventEmitter<any>();

  removePolicy(item: any) {
    this.removenew.emit(item);
  }
}
