import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { CustomChips } from '../../../../shared/components/custom-chips/custom-chips';
import { PageHeader } from '../../../../shared/components/page-header/page-header';

@Component({
  selector: 'claim-details',
  imports: [CustomCard, CustomChips, PageHeader],
  templateUrl: './claim-details.html',
})
export class ClaimDetails {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  selectedAssets = [
    { id: 1, label: 'Building 15' },
    { id: 2, label: 'Toyota Corolla 2022' },
  ];

  removeAssets(id: number | string) {
    this.selectedAssets = this.selectedAssets.filter((policy) => policy.id !== id);
  }
}
