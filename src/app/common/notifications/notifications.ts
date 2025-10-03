import { Component } from '@angular/core';
import { CustomCard } from '../../shared/components/custom-card/custom-card';
import { PageHeader } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-notifications',
  imports: [CustomCard, PageHeader],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {}
