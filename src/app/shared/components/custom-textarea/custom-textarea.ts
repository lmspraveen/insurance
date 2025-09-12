import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'custom-textarea',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './custom-textarea.html',
  styleUrls: ['./custom-textarea.scss'],
})
export class CustomTextarea {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() control: FormControl = new FormControl();
  @Input() value: string | null = null;
  @Input() rows = 3;

  @Output() valueChange = new EventEmitter<string>();

  get hasValue(): boolean {
    return !!this.control?.value;
  }

  onInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }
}
