import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { QuoteService } from '../../../../../core/service/quote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../../../shared/components/loading-spinner/loading-spinner.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-quote-details',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    CardModule,
    TableModule,
	LoadingSpinnerComponent,
	ConfirmDialog,
	ToastModule
  ],
  providers: [ MessageService, ConfirmationService],
  templateUrl: './quote-details.component.html'
})
export class QuoteDetailsComponent { 
    prestations: any[] = [
        {
            name: 'Vidange',
            prix: 100
        },
        {
            name: 'Réparation pneu',
            prix: 200
        }
    ];
	quote: any;
	isLoading: boolean = true;

	constructor (
		private quoteService: QuoteService, 
		private route: ActivatedRoute, 
		private router: Router,
		private confirmationService: ConfirmationService,
		private messageService: MessageService
	) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
		console.log(id);
		
		if (id) {
			this.getDetailsQuote(id);
			this.isLoading = false;
		} else {
			this.router.navigate([`manager/error`, 'id du devis non trouvé']);
		}
    }

	getDetailsQuote(id: string) {
		this.quoteService.getQuoteById(id!).subscribe({
			next : (data) => {
				this.quote = data;
				console.log(this.quote);
			}, error : (error) => {
				this.router.navigate([`manager/error`, error.error.message]);
			}
		});
	}

	validateQuote () {
		console.log('quote id' + this.quote._id);
		
		this.quoteService.validateQuote(this.quote._id).subscribe({
			next : (quote: any) => {
				this.quote.quote_state_id = quote.quote_state_id;
				this.messageService.add({ severity: 'success', summary: 'Validation terminé', detail: 'Le devis a été validé avec succès', life: 3000 });
			}, 
			error : (error:any) => {
				this.messageService.add({ severity: 'error', summary: 'Une erreur est survenue', detail: error.error.message, life: 3000 });
			}
		});
	}

	confirmValidation() {
        this.confirmationService.confirm({
            header: 'Confirmation de la validation',
            message: 'Voulez-vous vraiment valider ce devis.',
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
                this.validateQuote();
            },
            reject: () => { }
        });
    }
}
