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
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';

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
	ToastModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    DatePicker,
    FloatLabel
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
    addDiscountVisible: boolean = false;
    discount: number = 0;
    showUpdateDate: boolean = false;

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
                this.discount = this.quote.discount;
                if (this.quote.appointment_id.time_start && typeof this.quote.appointment_id.time_start === 'string') {
                    this.quote.appointment_id.time_start = new Date(this.quote.appointment_id.time_start);
                }
				console.log(this.quote.appointment_id.time_start);
			}, error : (error) => {
				this.router.navigate([`manager/error`, error.error.message]);
			}
		});
	}

	validateQuote () {
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

    UpdateDiscount () {
        this.quoteService.updateDiscount(this.quote._id, this.discount).subscribe({
            next: (data:any) => {
                this.quote = data;
				this.messageService.add({ severity: 'info', summary: 'Remise Mise à jour', detail: 'La remise a été mise à jour', life: 3000 });
            },
            error: (error:any) => {
				this.messageService.add({ severity: 'error', summary: 'Une erreur est survenue', detail: error.error.message, life: 3000 });
            }
        });
    }

    dialogHeader: string = '';
    dialogMessage: string = '';
	confirm(type:string) {
        if (type === 'validation') {
            this.dialogHeader = 'Confirmation de la validation';
            this.dialogMessage = 'Voulez-vous vraiment valider ce devis.';
        } else if (type === 'discount') {
            this.dialogHeader = 'Confirmation de votre remise';
            this.dialogMessage = 'Une remise de ' + this.discount + ' % pour cette devise';
        } else if (type === 'newDate') {
            this.dialogHeader = 'Confirmation de cette nouvelle date de rendez-vous';
            this.dialogMessage = 'Le rendez-vous aura lieu à cette date et un email sera envoyé';
        }
        this.confirmationService.confirm({
            header: this.dialogHeader,
            message: this.dialogMessage,
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
                if (type === 'validation') {
                    this.validateQuote();
                } else if (type === 'discount') {
                    this.UpdateDiscount();
                    this.addDiscountVisible = false;
                } else if (type === 'newDate') {
                    this.showUpdateDate = false;
                }
            },
            reject: () => { }
        });
    }
}
