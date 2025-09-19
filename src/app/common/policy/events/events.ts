import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';

@Component({
  selector: 'app-events',
  imports: [MatIconButton, CustomCard],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class PolicyEvents {}
