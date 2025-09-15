import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'date';

@Component({
  selector: 'custom-input',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './custom-input.html',
  styleUrls: ['./custom-input.scss'],
})
export class CustomInput {
  @Input({ required: true }) label!: string;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() type: InputType = 'text';
  @Input({ required: true }) control!: FormControl<string | null>;

  hide = true; // used only for password type

  get hasValue(): boolean {
    return !!this.control?.value;
  }

  getInputType(): string {
    return this.type === 'password' ? (this.hide ? 'password' : 'text') : this.type;
  }
  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}
