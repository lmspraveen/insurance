import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { PageHeader } from '../../../shared/components/page-header/page-header';

@Component({
  selector: 'invoice-details',
  imports: [CustomCard, PageHeader],
  templateUrl: './invoice-details.html',
})
export class InvoiceDetails {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
