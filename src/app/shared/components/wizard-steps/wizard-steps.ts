import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wizard-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard-steps.html',
  styleUrl: './wizard-steps.scss',
})
export class WizardSteps {
  @Input() steps: string[] = [];

  /** Current active step (1-based index) */
  @Input() activeStep = 1;
}
