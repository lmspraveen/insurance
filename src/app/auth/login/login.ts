import { Component, inject } from '@angular/core';
import { CustomInput } from '../../shared/components/custom-input/custom-input';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomButton } from '../../shared/components/custom-button/custom-button';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarHorizontalPosition,
  MatSnackBarLabel,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [
    CustomInput,
    CustomButton,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private authService: AuthService, private router: Router) {}

  private _snackBar = inject(MatSnackBar);
  // Set default positions
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top'; // 👈 "center" is NOT supported, top is closest

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['center-snackbar'],
    });
  }

  dummyLogin(): void {
    this.authService.login(); // store dummy token
    this.router.navigate(['/dashboard']); // redirect to dashboard
  }

  goToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  goToSignup() {
    this.router.navigate(['/auth/signup']);
  }

  form = new FormGroup({
    employeeCode: new FormControl<string | null>('', Validators.required),
    mobile: new FormControl<string | null>(''),
    password: new FormControl<string | null>(''),
  });
}
