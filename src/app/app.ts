import { ChangeDetectionStrategy, Component, inject, signal, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { MatTabsModule } from '@angular/material/tabs';

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
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly title = signal('ng-material-demo');
  hide: boolean = true;

  roles: Role[] = [
    { value: 'unit-user', viewValue: 'Unit User' },
    { value: 'head', viewValue: 'Unit Head (HOD)' },
    { value: 'insurance-coordinator', viewValue: 'Insurance Coordinator' },
    { value: 'insurance-manager', viewValue: 'Insurance Manager' },
    { value: 'finance', viewValue: 'Finance' },
  ];
}
