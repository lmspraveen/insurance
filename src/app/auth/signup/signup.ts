import { Component } from '@angular/core';
// import { CustomInput } from '../../shared/components/custom-input/custom-input';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CustomSelect } from '../../shared/components/custom-select/custom-select';
import { CustomInput } from '../../shared/components/custom-input/custom-input';
import { CustomTextarea } from '../../shared/components/custom-textarea/custom-textarea';
import { CustomButton } from '../../shared/components/custom-button/custom-button';

interface Roles {
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
    CustomSelect,
    CustomInput,
    // CustomTextarea,
    CustomButton,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  hide: boolean = true;

  form = new FormGroup({
    Name: new FormControl<string | null>('', Validators.required),
    Roles: new FormControl<string | null>('', Validators.required),
    CPassword: new FormControl<string | null>('', Validators.required),
    NPassword: new FormControl<string | null>('', Validators.required),
  });

  selectedRole: string = '';
  roles: Roles[] = [
    { value: 'unit-user', viewValue: 'Unit User' },
    { value: 'head', viewValue: 'Unit Head (HOD)' },
    { value: 'insurance-coordinator', viewValue: 'Insurance Coordinator' },
    { value: 'insurance-manager', viewValue: 'Insurance Manager' },
    { value: 'finance', viewValue: 'Finance' },
  ];

  messageControl = new FormControl('', { nonNullable: true });
  message = '';

  constructor(private location: Location) {}

  goToBack() {
    this.location.back();
  }
}
