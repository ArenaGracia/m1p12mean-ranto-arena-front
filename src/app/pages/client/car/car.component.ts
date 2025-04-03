import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../core/service/car.service';
import { Car } from '../../../shared/models/Car';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrandService } from '../../../core/service/brand.service';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputGroup } from 'primeng/inputgroup';
import { SelectModule } from 'primeng/select';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonModule, 
    TableModule, 
    LoadingSpinnerComponent, 
    DialogModule, 
    InputTextModule, 
    FormsModule,
    AutoCompleteModule,
    InputGroup,
    SelectModule
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent implements OnInit {
  cars : any[] = [];
  brands : any[] = [];
  newCar : Car = new Car();
  filteredBrand: any[] = [];
  isLoading : boolean = true;
  visible: boolean = false;

  constructor(
    private carService : CarService,
    private brandService : BrandService,
    private authService : AuthService
  ){}

  ngOnInit(): void {
    this.getCars();
    this.getBrands();
  }
   

  getCars(){
    this.carService.getCars().subscribe({
			next : (data) => {
				this.cars = data;
        this.isLoading = false;
			}
		});
  }

  saveCar() : void{
    this.isLoading = true;
    this.carService.createCar(this.newCar).subscribe({
			next : () => {
        this.getCars()
        this.isLoading = false;
			}
		});
    this.visible = !this.visible;
  }

  getBrands(){
    this.brandService.getBrands().subscribe({
			next : (data) => {
				this.brands = data;
        this.isLoading = false;
			}
		});
  }

  showDialog() {
    this.visible = true;
  }  
}
