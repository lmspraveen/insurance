import { ChangeDetectionStrategy, Component, inject, signal, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogExampleDialog } from './dialog-example-dialog';
import {MatTabsModule} from '@angular/material/tabs';

interface Role {
  value: string;
  viewValue: string;
}

export interface DialogData {
  name: string;
  animal: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly title = signal('ng-material-demo');
  hide: boolean = true;

  readonly animal = signal('');
  readonly name = model('');

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleDialog, {
         width: '900px',
    maxWidth: '100vw', 
     panelClass: 'custom-dialog-container', 
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
    roles: Role[] = [
    {value: 'unit-user', viewValue: 'Unit User'},
    {value: 'head', viewValue: 'Unit Head (HOD)'},
    {value: 'insurance-coordinator', viewValue: 'Insurance Coordinator'},
    {value: 'insurance-manager', viewValue: 'Insurance Manager'},
    {value: 'finance', viewValue: 'Finance'},
  ];
}
