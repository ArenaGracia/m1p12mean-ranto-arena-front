import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-quote-details',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    CardModule,
    TableModule
  ],
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
    ]
}
