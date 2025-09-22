import { Component } from '@angular/core';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-edit-policy',
  imports: [MatIconButton, CustomCard],
  templateUrl: './edit-policy.html',
  styleUrl: './edit-policy.scss',
})
export class EditPolicy {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
