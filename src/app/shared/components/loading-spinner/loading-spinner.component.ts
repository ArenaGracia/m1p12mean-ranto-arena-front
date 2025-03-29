import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  template: `
    <div class="flex align-items-center justify-content-center flex-column" [ngStyle]="{ height: height }">
      <span class="loader mb-3"></span>
      <div class="text-xl">Chargement</div>
    </div>
  `,
  styleUrl: 'loading-spinner.component.scss',
})
export class LoadingSpinnerComponent { 
  @Input() height: string = '5 cm'; 
  @Input() class: string = '';
}
