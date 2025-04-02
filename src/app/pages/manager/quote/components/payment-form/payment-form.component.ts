import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../../../../../core/service/payment.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
	selector: 'app-payment-form',
	standalone: true,
	imports: [
		CommonModule,
		InputGroupModule,
		InputGroupAddonModule,
		ReactiveFormsModule,
		FormsModule,
        ButtonModule,
		FloatLabelModule,
		DatePickerModule,
		InputNumberModule,
		InputTextModule,
		MessageModule
	],
	templateUrl: './payment-form.component.html',
})
export class PaymentFormComponent { 
	@Input() quoteId!: string;
	@Input() amountLeft!: number;
	@Input() messageService!: MessageService;
	@Input() confirmationService!: ConfirmationService;

	@Input() showDialog: boolean = false;

    @Output() onSave = new EventEmitter<any>();
	
	errorMessage?: string;

	// payment
	paymentForm : FormGroup = this.fb.group({
		amount:  [null, [Validators.required, Validators.min(0)]],
		date: [new Date(), Validators.required]
	});
	
	get f() { return this.paymentForm.controls; }

	
	constructor (
		private fb: FormBuilder,
		private paymentService: PaymentService,
	) {}

	payer () {
		const amount = this.paymentForm.get('amount')?.value;
        const date = this.paymentForm.get('date')?.value;

        this.paymentService.makePayment({amount, date, quote_id: this.quoteId}, this.amountLeft).subscribe({ 
			next:(payement) => {
				this.paymentForm.reset();
				this.onSave.emit(payement);
				this.messageService.add({ severity: 'info', summary: 'Payement Enregistré', detail: 'Les informations de ce payement a été enregistré' });
        	},
			error: (error) => {
				this.errorMessage = error.error.message;
			}
		});
	}

	confirmPayment(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Enregistrer le paiement ?',
            header: 'Confirmation',
            closable: true,
            closeOnEscape: true,
            icon: 'pi pi-info-circle',
            rejectButtonProps: {
                label: 'Annuler',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Valider',
            },
            accept: () => {
				this.payer();	
				this.showDialog = false;
            },
            reject: () => { },
        });
    }
}
