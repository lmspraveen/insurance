import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';

@Component({
  selector: 'edit-policy-coinsured',
  imports: [MatIconButton, CustomCard],
  templateUrl: './edit-policy-coinsured.html',
})
export class EditPolicyCoinsured {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
