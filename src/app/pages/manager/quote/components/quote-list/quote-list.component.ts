import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MessageBlockComponent } from '../../../../../shared/components/message-block/message-block.component';
import { ButtonModule } from 'primeng/button';
import { PaginationComponent } from '../../../../../shared/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { QuoteService } from '../../../../../core/service/quote.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { MontantPipe } from "../../../../../shared/pipes/montant.pipe";

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    MessageBlockComponent,
    ButtonModule,
    PaginationComponent,
    RouterLink,
    ConfirmDialogModule,
    TooltipModule,
    MontantPipe,
],
  templateUrl: './quote-list.component.html',
})
export class QuoteListComponent { 
    @Input() quotes: any[] = [];
    @Input() title: string = "Liste devis";
    @Input() messageService?: MessageService;
    @Input() confirmationService?: ConfirmationService;
    @Input() showValidationButton: boolean = false;

    constructor(private quoteService: QuoteService) {}

    validateQuote (quoteId: string) {
        this.quoteService.validateQuote(quoteId).subscribe({
            next : () => {
                this.messageService?.add({ severity: 'info', detail: 'Le Devis a été Validé', life: 3000 });
            }, error : (error) => {
                this.messageService?.add({ severity: 'danger', detail: error.error.message, life: 3000 });
            },
        });
    }

    cancelQuote (quoteId: string, email: string) { 
        this.quoteService.cancelQuote(quoteId, email).subscribe({
            next : () => {
                this.messageService?.add({ severity: 'info', detail: 'Le Devis a été annulé', life: 3000 });
            }, error : (error) => {
                this.messageService?.add({ severity: 'danger', detail: error.error.message, life: 3000 });
            },
        });
    }

    confirm(quoteId: string, type: string, email?:string) {
        this.confirmationService!.confirm({
            header: 'Confirmation',
            message: 'Voulez-vous '+type+' le devis?',
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: {
                label: 'Annuler',
                icon: 'pi pi-times',
                outlined: true,
                size: 'small'
            },
            acceptButtonProps: {
                label: 'Valider',
                icon: 'pi pi-check',
                size: 'small'
            },
            accept: () => {
                if (type == 'valider') {
                    this.validateQuote(quoteId);
                } else if (type == 'annuler') {
                    this.cancelQuote(quoteId, email!);
                }
            },
            reject: () => { }
        });
    }
}
