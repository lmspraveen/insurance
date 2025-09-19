import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';

@Component({
  selector: 'app-renew-policy',
  imports: [MatIconButton, CustomCard],
  templateUrl: './renew-policy.html',
  styleUrl: './renew-policy.scss',
})
export class RenewPolicy {}
