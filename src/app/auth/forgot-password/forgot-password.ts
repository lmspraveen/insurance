import { Component } from '@angular/core';
import { CustomInput } from '../../shared/components/custom-input/custom-input';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [
    CustomInput,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  form = new FormGroup({
    employeeCode: new FormControl<string | null>('', Validators.required),
    mobile: new FormControl<string | null>(''),
    password: new FormControl<string | null>(''),
  });

  constructor(private location: Location, private router: Router) {}
  goBack(): void {
    this.location.back();
  }
  goToOtp() {
    this.router.navigate(['/auth/signup']);
  }
}
