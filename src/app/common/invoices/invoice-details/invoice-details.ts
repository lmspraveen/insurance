import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';

@Component({
  selector: 'invoice-details',
  imports: [MatIconButton, CustomCard],
  templateUrl: './invoice-details.html',
})
export class InvoiceDetails {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
