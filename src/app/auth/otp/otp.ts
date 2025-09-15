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
import { CustomButton } from '../../shared/components/custom-button/custom-button';

@Component({
  selector: 'app-otp',
  imports: [
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CustomButton,
  ],
  templateUrl: './otp.html',
  styleUrl: './otp.scss',
})
export class Otp {
  constructor(private location: Location, private router: Router) {}
  goBack(): void {
    this.location.back();
  }
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
