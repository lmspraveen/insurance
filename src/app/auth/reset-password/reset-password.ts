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
import { CustomInput } from '../../shared/components/custom-input/custom-input';
import { CustomButton } from '../../shared/components/custom-button/custom-button';

@Component({
  selector: 'app-reset-password',
  imports: [
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CustomInput,
    CustomButton,
  ],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {
  hide: boolean = true;
  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  form = new FormGroup({
    nPassword: new FormControl<string | null>('', Validators.required),
    cnPassword: new FormControl<string | null>('', Validators.required),
  });
}
