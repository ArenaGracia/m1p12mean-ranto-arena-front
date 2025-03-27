import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Quote } from '../../../../../shared/models/Quote';
import { MessageBlockComponent } from '../../../../../shared/components/message-block/message-block.component';
import { ButtonModule } from 'primeng/button';
import { PaginationComponent } from '../../../../../shared/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    LoadingSpinnerComponent,
    MessageBlockComponent,
    ButtonModule,
    PaginationComponent,
    RouterLink
  ],
  templateUrl: './quote-list.component.html',
})
export class QuoteListComponent { 
  @Input() quotes: Quote[] = [];
  @Input() title: string = "Liste devis";

  isLoading: boolean = false;
}
