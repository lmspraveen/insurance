import { Component } from '@angular/core';
import { CustomCard } from '../../../shared/components/custom-card/custom-card';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-events',
  imports: [CustomCard, MatIconButton],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {}
