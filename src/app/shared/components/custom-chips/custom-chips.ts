import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'custom-chips',
  standalone: true,
  imports: [CommonModule, MatLabel],
  templateUrl: './custom-chips.html',
  styleUrl: './custom-chips.scss',
})
export class CustomChips {
  @Input() chips: { id?: number | string; label: string }[] = [];
  @Input() label: string | null = null;
  @Output() remove = new EventEmitter<number | string>();

  onRemoveChip(chip: any) {
    this.remove.emit(chip.id ?? chip.label); // emit id if exists, else label
  }
}
