import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../../core/service/prestation.service';
import { Car } from '../../../shared/models/Car';
import { Prestation } from '../../../shared/models/Prestation';
import { CarService } from '../../../core/service/car.service';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.scss'
})

export class QuoteFormComponent implements OnInit {
  prestations : Prestation [] = [];
  isLoading : boolean = true;
  cars : Car[] = [];
  car : any;
  appointment : any ;

  ngOnInit(): void {

  }

  constructor(
    private prestationService : PrestationService,
    private carService : CarService
  ){}

  getPrestations(id : string){
    this.prestationService.getAllPrestations().subscribe({
			next : (data) => {
				this.prestations = data;
        this.isLoading = false;
			}
		});
  }
}