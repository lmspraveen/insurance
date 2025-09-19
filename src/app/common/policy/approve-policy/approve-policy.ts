import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';

@Component({
  selector: 'app-approve-policy',
  imports: [MatIconButton, CustomCard],
  templateUrl: './approve-policy.html',
  styleUrl: './approve-policy.scss',
})
export class ApprovePolicy {}
