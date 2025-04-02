import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { LoadingSpinnerComponent } from '../../../../../shared/components/loading-spinner/loading-spinner.component';
import { ButtonModule } from 'primeng/button';
import { QuoteListComponent } from '../../components/quote-list/quote-list.component';
import { QuoteService } from '../../../../../core/service/quote.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SelectModule } from 'primeng/select';
import { State } from '../../../../../shared/models/State';
import { StateService } from '../../../../../core/service/state.service';
import { FormsModule } from '@angular/forms';

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
        LoadingSpinnerComponent,
        SelectModule,
        FormsModule
    ],
    providers: [ MessageService, ConfirmationService ],
    templateUrl: './quote-list-page.component.html',
})
export class QuoteListPageComponent { 
    quotes: any[] = [];
    constructor(private quoteService: QuoteService, public messageService: MessageService, public confirmationService: ConfirmationService, private stateService: StateService) {}
    isloading: boolean = true;

    states: State[] = [];
    selectedState: State = new State();

    ngOnInit () {
        this.getAllQuotes();
        this.stateService.getAllStates('quote').subscribe({
            next: (data) => {
                this.states = [{_id: null, name: 'Tout les devis'}, ...data];
            },
            error: (error) => {
                this.messageService?.add({ severity: 'info', detail: 'Erreur lors de la récupération des états :'+ error});
            }
        }) 
    }

    getAllQuotes() {
        this.quoteService.getQuotes().subscribe({
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
    
    onStateSelect(event: any) {
        const selected = event.value;
        if (!selected || selected._id === null) {
            this.getAllQuotes();
        } else {
            this.quoteService.getQuoteByState(selected.value).subscribe({
                next : (data) => {
                    this.quotes = data;
                },
                error: (error) => {
                    this.messageService?.add({ severity: 'info', detail: 'Erreur lors de la récupération des devis :'+ error});
                }
            });
        }
    }

}
