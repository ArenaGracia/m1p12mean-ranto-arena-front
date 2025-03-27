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
    <div class="flex flex-wrap align-items-center justify-content-center" [ngStyle]="{ height: height }">
      <p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" 
        [style]="{ width: '50px', height: '50px' }" >
      </p-progress-spinner>
    </div>
  `,
})
export class LoadingSpinnerComponent { 
  @Input() height: string = '5 cm'; 
}
