import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'content-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div>
      <!-- Render parent template if provided -->
      @if (data.template) {
      <ng-container [ngTemplateOutlet]="data.template"></ng-container>
      }

      <!-- Render raw HTML or message -->
      @if (!data.template) {
      <div [innerHTML]="data.html || data.message || ''"></div>
      }

      <!-- Default Buttons (only if customButtons not true) -->
      @if (!data.customButtons) {
      <mat-dialog-actions align="end" class="flex gap-4 !p-0">
        <button
          mat-stroked-button
          color="primary"
          (click)="onCancel()"
          class="min-h-[60px] !min-w-[115px] !bg-white !text-[20px] !font-semibold !rounded-[10px]"
        >
          {{ data.cancelText || 'Cancel' }}
        </button>
        <button
          mat-flat-button
          color="primary"
          (click)="onConfirm()"
          class="min-h-[60px] !min-w-[115px] !text-[20px] !font-semibold !rounded-[10px]"
        >
          {{ data.confirmText || 'Confirm' }}
        </button>
      </mat-dialog-actions>
      }
    </div>
  `,
})
export class ContentDialog {
  constructor(
    private dialogRef: MatDialogRef<ContentDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      message?: string;
      html?: string;
      template?: TemplateRef<any>;
      cancelText?: string;
      confirmText?: string;
      customButtons?: boolean;
    }
  ) {}

  onCancel() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}
