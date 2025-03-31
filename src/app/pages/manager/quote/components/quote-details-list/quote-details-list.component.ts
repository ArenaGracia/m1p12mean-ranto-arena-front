import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MontantPipe } from "../../../../../shared/pipes/montant.pipe";
import { MessageBlockComponent } from "../../../../../shared/components/message-block/message-block.component";

@Component({
  selector: 'app-quote-details-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    MontantPipe,
    MessageBlockComponent
],
  templateUrl: './quote-details-list.component.html',
})
export class QuoteDetailsListComponent { 
  @Input() quoteDetails?: any[] = [];

  
}
