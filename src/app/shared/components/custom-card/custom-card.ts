import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-card.html',
  styleUrls: ['./custom-card.scss'],
})
export class CustomCard {
  @Input('class') extraClasses: string = '';
}
