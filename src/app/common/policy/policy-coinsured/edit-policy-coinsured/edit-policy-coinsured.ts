import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { PageHeader } from '../../../../shared/components/page-header/page-header';

@Component({
  selector: 'edit-policy-coinsured',
  imports: [CustomCard, PageHeader],
  templateUrl: './edit-policy-coinsured.html',
})
export class EditPolicyCoinsured {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
