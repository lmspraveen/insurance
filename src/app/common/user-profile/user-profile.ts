import { Component } from '@angular/core';
import { CustomInput } from '../../shared/components/custom-input/custom-input';
import { CustomCard } from '../../shared/components/custom-card/custom-card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomButton } from '../../shared/components/custom-button/custom-button';
import { MatDialog } from '@angular/material/dialog';
import { PageHeader } from '../../shared/components/page-header/page-header';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'user-profile',
  imports: [CustomInput, CustomCard, ReactiveFormsModule, CustomButton, PageHeader],
  templateUrl: './user-profile.html',
})
export class UserProfile {
  constructor(private dialog: MatDialog, private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  /** Form */
  form = new FormGroup({
    companyCode: new FormControl('', Validators.required),
  });

  /** Form Submit */
  submitForm() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      console.log('Form Invalid');
      this.form.markAllAsTouched();
    }
  }
}
