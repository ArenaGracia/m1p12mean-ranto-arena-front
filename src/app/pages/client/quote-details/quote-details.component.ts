import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../../../core/service/quote.service';
import { Quote } from '../../../shared/models/Quote';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { MontantPipe } from '../../../shared/pipes/montant.pipe';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-quote-details',
  standalone: true,
  imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        TableModule,
        LoadingSpinnerComponent,
        MontantPipe,
  ],
  templateUrl: './quote-details.component.html',
  styleUrl: './quote-details.component.scss'
})
export class QuoteDetailsComponent implements OnInit {
  quote! : any ;
  isLoading : boolean = true;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private quoteService : QuoteService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
        this.getQuoteById(id);  
    } else {
        this.router.navigate([`/error`, 'id du Catégorie non trouvé']);
    }
  }

  getQuoteById(id : string){
    this.quoteService.getQuoteById(id!).subscribe({
			next : (data) => {
				this.quote = data;
        this.isLoading = false;
			}, error : (error) => {
				this.router.navigate([`/error`, error.error.message]);
			}
		});
  }

}
