import { Component } from '@angular/core';
// import { CustomInput } from '../../shared/components/custom-input/custom-input';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  imports: [
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  hide: boolean = true;
  roles: Role[] = [
    { value: 'unit-user', viewValue: 'Unit User' },
    { value: 'head', viewValue: 'Unit Head (HOD)' },
    { value: 'insurance-coordinator', viewValue: 'Insurance Coordinator' },
    { value: 'insurance-manager', viewValue: 'Insurance Manager' },
    { value: 'finance', viewValue: 'Finance' },
  ];
}
