import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'confirmation-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div class="p-8 text-center">
      <h3 class="text-[20px] text-[var(--primary)] font-semibold mb-8">
        {{ data.message || 'Are you sure you want to make the changes?' }}
      </h3>
      <mat-dialog-actions align="center" class="flex gap-4 !p-0">
        <button
          mat-stroked-button
          color="primary"
          class="min-h-[60px] !min-w-[115px] !bg-white !text-[20px] !font-semibold !rounded-[10px]"
          (click)="onCancel()"
        >
          No
        </button>
        <button
          mat-flat-button
          color="primary"
          class="min-h-[60px] !min-w-[115px] !text-[20px] !font-semibold !rounded-[10px]"
          (click)="onConfirm()"
        >
          Yes
        </button>
      </mat-dialog-actions>
    </div>
  `,
})
export class ConfirmationDialog {
  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { message?: string }
  ) {}

  onCancel() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}
