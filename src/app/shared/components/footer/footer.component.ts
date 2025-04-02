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
    <p>2025 - <span class="font-italic">RAVONINAHITRA Ranto Ny Aina Jeremie</span> - <span class="font-italic">RABESERANANA Arena Gracia</span></p>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent { }
