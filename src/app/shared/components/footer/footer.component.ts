import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="layout-footer">
    <p>Garage Application m1p12mean-Arena-Ranto Project by <span class="font-italic">RAVONINAHITRA Ranto Ny Aina Jeremie</span> and <span class="font-italic">RABESERANANA Arena Gracia</span></p>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent { }
