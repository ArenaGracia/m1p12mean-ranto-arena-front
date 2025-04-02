import { Component } from '@angular/core';
import { QuoteService } from '../../../core/service/quote.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  quotes: any[] = [];
  constructor(
    private quoteService: QuoteService, 
    public messageService: MessageService, 
    public confirmationService: ConfirmationService
  ) {}
  
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
