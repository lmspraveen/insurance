import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';

@Component({
  selector: 'app-manage-policy',
  imports: [MatIconButton, CustomCard],
  templateUrl: './manage-policy.html',
  styleUrl: './manage-policy.scss',
})
export class ManagePolicy {}
