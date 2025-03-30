import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Quote } from '../../../../../shared/models/Quote';
import { LoadingSpinnerComponent } from '../../../../../shared/components/loading-spinner/loading-spinner.component';
import { MessageBlockComponent } from '../../../../../shared/components/message-block/message-block.component';
import { ButtonModule } from 'primeng/button';
import { PaginationComponent } from '../../../../../shared/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { QuoteListComponent } from '../../components/quote-list/quote-list.component';
import { QuoteService } from '../../../../../core/service/quote.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
    selector: 'app-quote-list-page',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        CardModule,
        ButtonModule,
        QuoteListComponent,
        ToastModule,
        ConfirmDialogModule,
        LoadingSpinnerComponent
    ],
    providers: [ MessageService, ConfirmationService ],
    templateUrl: './quote-list-page.component.html',
})
export class QuoteListPageComponent { 
    quotes: any[] = [];
    constructor(private quoteService: QuoteService, public messageService: MessageService, public confirmationService: ConfirmationService) {}
    isloading: boolean = true;

    ngOnInit () {
        this.quoteService.getQuoteByState(1).subscribe({
            next: (data) => {
                this.quotes = data;
                this.isloading = false;
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de la récuperation des devis ' + error.error.message });
                this.isloading = false;
            }
        });
    }
}
