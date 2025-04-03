<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/Prestation';
import { Car } from '../../../shared/models/Car';
import { PrestationService } from '../../../core/service/prestation.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.scss'
})
<<<<<<< Updated upstream
export class QuoteFormComponent {

}
=======
export class QuoteFormComponent implements OnInit {
  prestations : Prestation [] = [];
  isLoading : boolean = true;
  cars : Car[] = [];
  car : any;
  appointment : any ;

  ngOnInit(): void {

  }

  constructor(
    private prestationService : PrestationService
    private carService : CarS
  ){}

  getPrestations(id : string){
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
>>>>>>> Stashed changes
