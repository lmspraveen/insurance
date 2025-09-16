import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomCard } from '../../shared/components/custom-card/custom-card';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatList,
    MatListItem,
    CustomCard,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  filters = {
    vehicle: false,
    building: false,
    fire: false,
    marine: false,
    others: false,
    submitted: false,
    inreview: false,
    approve: false,
    rejected: false,
    paid: false,
    closed: false,
  };

  applyFilters(menuTrigger: any) {
    console.log('Filters applied', this.filters);
    menuTrigger.closeMenu();
  }
}
