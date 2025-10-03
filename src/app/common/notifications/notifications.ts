import { Component } from '@angular/core';
import { CustomCard } from '../../shared/components/custom-card/custom-card';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-notifications',
  imports: [CustomCard, MatIconButton],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {}
