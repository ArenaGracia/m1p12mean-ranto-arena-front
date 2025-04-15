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
import { MontantPipe } from "../../../../../shared/pipes/montant.pipe";
import { EmailService } from '../../../../../core/service/email.service';
import { QuoteDetailsListComponent } from '../../components/quote-details-list/quote-details-list.component';
import { PaymentFormComponent } from '../../components/payment-form/payment-form.component';
import { PaymentService } from '../../../../../core/service/payment.service';
import { AppointmentService } from '../../../../../core/service/appointment.service';
import { redirectToErrorPage, showErrorMessageDialog, showInfoMessageDialog, showSuccessMessageDialog } from '../../../../../core/service/util.service';

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
    FloatLabel,
    MontantPipe,
    QuoteDetailsListComponent,
    PaymentFormComponent
],
  providers: [ MessageService, ConfirmationService],
  templateUrl: './quote-details.component.html',
})
export class QuoteDetailsComponent { 
	quote: any;
	isLoading: boolean = true;
    addDiscountVisible: boolean = false;
    discount: number = 0;
    showUpdateDate: boolean = false;
    newDate: any;
    paymentSummary?: any;

	showPaymentDialog: boolean = false;

	constructor (
		private quoteService: QuoteService, 
        private paymentService: PaymentService, 
        private appointmentService: AppointmentService,
		private route: ActivatedRoute, 
		private router: Router,
		public confirmationService: ConfirmationService,
		public messageService: MessageService,
        public emailService: EmailService,
	) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
		
		if (id) {
			this.getDetailsQuote(id);
            this.getPaymentSummary(id);
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
                if (this.quote.appointment.time_start && typeof this.quote.appointment.time_start === 'string') {
                    this.quote.appointment.time_start = new Date(this.quote.appointment.time_start);
                }
                this.newDate = data.appointment.time_start;
			}, error : (error) => {
				redirectToErrorPage(this.router, error.message);
			}
		});
	}

    getPaymentSummary(id: string) {
        this.paymentService.getPaymentSummary(id).subscribe({
            next: (summary: any) => {
                this.paymentSummary = summary;
            },
            error: (error: any) => {
                showErrorMessageDialog(this.messageService, error.error.message);
            }
        });
    }

	validateQuote () {
		this.quoteService.validateQuote(this.quote._id).subscribe({
			next : (quote: any) => {
				this.quote.quote_state_id = quote.quote_state_id;
				showSuccessMessageDialog(this.messageService, 'Le devis a été validé avec succès', 'Validation terminée');
			}, 
			error : (error:any) => {
                showErrorMessageDialog(this.messageService, error.error.message);
			}
		});
	}

    UpdateDiscount () {
        this.quoteService.updateDiscount(this.quote._id, this.discount).subscribe({
            next: () => {
                this.quote.discount = this.discount;
                showInfoMessageDialog(this.messageService, 'La remise a été mise à jour', 'Mise à jour de la remise');
            },
            error: (error:any) => {
                showErrorMessageDialog(this.messageService, error.error.message);
            }
        });
    }

    SendEmailConfirmationNewDate() {
        this.emailService.sendEmailConfirmation(this.quote.appointment.user.email, this.newDate, this.quote.appointment.time_start, this.quote._id).subscribe({
            next: () => {
                showInfoMessageDialog(this.messageService, 'Un email de confirmation a été envoyé', 'Email envoyé');
            },
            error: (error:any) => {
                showErrorMessageDialog(this.messageService, error.error.message);
            }
        });
    }

    EndAppointment() {
        this.appointmentService.endAppointment(this.quote.appointment._id, this.quote._id, this.paymentSummary?.amount_remaining).subscribe({
            next : () => {
                if (this.quote?.appointment?.appointment_state.value !== undefined) { this.quote.appointment.appointment_state.value = 3; }
                showInfoMessageDialog(this.messageService, 'Rendez-vous marqué comme terminé', 'Términé');
            }, error : (error: any) => {
                showErrorMessageDialog(this.messageService, error.error.message);
            }
        });
    }

	confirm(type: string) {
        const configMap: Record<string, { header: string; message: string; action: () => void }> = {
            validation: {
                header: 'Confirmation de la validation',
                message: 'Voulez-vous vraiment valider ce devis.',
                action: () => this.validateQuote()
            },
            discount: {
                header: 'Confirmation de votre remise',
                message: `Une remise de ${this.discount} % pour cette devise`,
                action: () => {
                    this.UpdateDiscount();
                    this.addDiscountVisible = false;
                }
            },
            newDate: {
                header: 'Confirmation de cette nouvelle date de rendez-vous',
                message: 'Le rendez-vous aura lieu à cette date et un email sera envoyé',
                action: () => {
                    this.showUpdateDate = false;
                    this.SendEmailConfirmationNewDate();
                }
            },
            terminer: {
                header: 'Confirmation',
                message: 'Voulez-vous terminer cet rendez-vous ?',
                action: () => this.EndAppointment()
            }
        };

        const config = configMap[type];
        if (!config) return;

        this.confirmationService.confirm({
            header: config.header,
            message: config.message,
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: { label: 'Annuler', icon: 'pi pi-times', outlined: true, size: 'small' },
            acceptButtonProps: { label: 'Valider', icon: 'pi pi-check', size: 'small' },
            accept: config.action,
            reject: () => {}
        });
    }
    
    onPaymentSaved(payment: any) {
        this.getPaymentSummary(this.quote?._id);
        this.showPaymentDialog = false;
    }

    // pour la vérification des etats
    quoteStates = {
        nouveau: 1,
        enCours: 2,
        valide: 3,
        rejete: 4,
        paye: 5
    };
    
    is(state: keyof typeof this.quoteStates): boolean {
        return this.quote?.quote_state?.value === this.quoteStates[state];
    }

    isNot(state: keyof typeof this.quoteStates): boolean {
        return !this.is(state);
    }
}
