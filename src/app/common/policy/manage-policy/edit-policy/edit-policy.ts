import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../../shared/components/custom-card/custom-card';
import { CustomChips } from '../../../../shared/components/custom-chips/custom-chips';

@Component({
  selector: 'app-edit-policy',
  imports: [MatIconButton, CustomCard, CustomChips],
  templateUrl: './edit-policy.html',
})
export class EditPolicy {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  /** Policies Chips */
  selectedPolicies = [
    { id: 1, label: 'Vehicle Insurance' },
    { id: 2, label: 'Asset & Liability Protection' },
    { id: 3, label: 'Crime Insurance' },
  ];

  selectedAssets = [
    { id: 1, label: 'Building 15' },
    { id: 2, label: 'Toyota Corolla 2022' },
  ];

  removePolicy(id: number | string) {
    this.selectedPolicies = this.selectedPolicies.filter((policy) => policy.id !== id);
  }

  removeAssets(id: number | string) {
    this.selectedAssets = this.selectedAssets.filter((policy) => policy.id !== id);
  }
}
