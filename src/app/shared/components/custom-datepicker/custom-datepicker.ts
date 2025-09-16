import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_FORMATS, MatDateFormats, provideNativeDateAdapter } from '@angular/material/core';

export const CUSTOM_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD MMM YYYY', // Parse format
  },
  display: {
    dateInput: 'dd MMM yyyy', // <-- This gives "18 Aug 2025"
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'custom-datepicker',
  standalone: true,
  templateUrl: './custom-datepicker.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ],
})
export class CustomDatepicker {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() required = false;
  @Input() control!: FormControl;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;

  hasValue = signal(false);

  ngOnInit() {
    this.control.valueChanges.subscribe((value) => {
      this.hasValue.set(!!value);
    });
  }
}
