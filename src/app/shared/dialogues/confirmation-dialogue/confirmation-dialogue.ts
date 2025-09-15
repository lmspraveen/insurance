import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from './../../../app'; // import interface from app

@Component({
  selector: 'confirmation-dialogue',
  templateUrl: './confirmation-dialogue.html',
  imports: [
    // FormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDialogTitle,
    // MatDialogContent,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogExampleDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
