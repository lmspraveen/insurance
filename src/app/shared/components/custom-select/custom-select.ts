import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'custom-select',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
  ],
  templateUrl: './custom-select.html',
  styleUrl: './custom-select.scss',
})
export class CustomSelect {
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() placeholder: string = 'Select';
  @Input() control: FormControl = new FormControl();
  @Input() options: { value: any; viewValue: string }[] = [];
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  onSelectionChange(event: any) {
    this.control.setValue(event.value);
    this.valueChange.emit(event.value);
    console.log('this is selection value', event.value);
  }

  get hasValue(): boolean {
    const val = this.control?.value;
    return val !== null && val !== undefined && val !== '';
  }
}
