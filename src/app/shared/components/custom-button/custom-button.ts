import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'custom-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIcon],
  templateUrl: './custom-button.html',
  styleUrls: ['./custom-button.scss'],
})
export class CustomButton {
  /** 'filled' => mat-flat-button | 'outlined' => mat-stroked-button */
  @Input('matButton') matButtonType: 'filled' | 'outlined' = 'filled';
  @Input() label: string = 'Button';
  @Input('class') extraClasses: string = '';
  @Input() disabled = false;
  @Input() icon?: string;
  @Input() iconPosition: 'start' | 'end' = 'start';
  @Output() buttonClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.buttonClick.emit(event);
  }

  isFilled() {
    return this.matButtonType === 'filled';
  }

  isOutlined() {
    return this.matButtonType === 'outlined';
  }
}
