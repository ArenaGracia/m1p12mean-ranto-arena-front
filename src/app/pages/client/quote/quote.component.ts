import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../../core/service/quote.service';
import { Quote } from '../../../shared/models/Quote';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { MontantPipe } from '../../../shared/pipes/montant.pipe';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [TableModule, CommonModule, LoadingSpinnerComponent, MontantPipe, ButtonModule, RouterLink, TagModule, BadgeModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})

export class QuoteComponent implements OnInit {
  quotes : any[] = [];
  isLoading : boolean = true;

  constructor(private quoteService : QuoteService) {}
  
  ngOnInit() {
    this.getQuotesUser();
  }

  getQuotesUser() : void{
    this.quoteService.getQuoteByUser().subscribe({
      next : (data) => {
        this.quotes = data ?? [];   
        this.isLoading = false;
      }
    });
  }

  getSeverityColor(severity: string): 'success' | 'info' | 'warn' | 'danger' {
    console.log("hkvbsk");
    
    switch (severity) {
      case 'Nouveau':
        return 'info';
      case 'Validé':
        return 'success';
      case 'Rejeté':
        return 'danger';
      default:
        return 'danger';
    }
  }
  
}
