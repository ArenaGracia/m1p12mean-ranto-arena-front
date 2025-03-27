import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Prestation } from '../../../../../shared/models/Prestation';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prestation-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
  ],
  templateUrl: './prestation-list.component.html',
})
export class PrestationListComponent { 
  @Input() prestations: Prestation[] = [];
  
  
}
