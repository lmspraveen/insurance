import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() value: any = '';
  @Output() valueChange = new EventEmitter<any>();

  hide = true; // used only for password type

  ngOnInit() {
    if (this.value) {
      this.control.setValue(this.value);
    }

    this.control.valueChanges.subscribe((val) => {
      this.value = val;
      this.valueChange.emit(val);
    });
  }

  getInputType(): string {
    return this.type === 'password' ? (this.hide ? 'password' : 'text') : this.type;
  }

  toggleVisibility(): void {
    this.hide = !this.hide;
  }

  get hasValue(): boolean {
    return !!this.control?.value;
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.valueChange.emit(inputValue);
  }
}
