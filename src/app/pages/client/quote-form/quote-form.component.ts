import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../../core/service/prestation.service';
import { CarService } from '../../../core/service/car.service';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputGroup } from 'primeng/inputgroup';
import { SelectModule } from 'primeng/select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';
import { AppointmentService } from '../../../core/service/appointment.service';
import { DialogModule } from 'primeng/dialog';
import { Message } from 'primeng/message';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [
    DialogModule,
    CalendarModule,
    Message,
    StepperModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DatePicker,
    InputGroup,
    SelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.scss'
})

export class QuoteFormComponent implements OnInit {
  formStep1: any;
  formStep2: any;
  prestations : any [] = [];
  isLoading : boolean = true;
  cars : any[] = [];
  columns: any[][] = [];
  car : any;
  date : any;
  message : string | null = null;  
  activeStep: number = 1;
  severity: string = 'info';
  isVisible : boolean = false;


  ngOnInit(): void {
    this.formStep1 = this.fb.group({
      date: [null, Validators.required],
      car: [null, Validators.required]
    });

    this.formStep2 = this.fb.group({
      prestations: [[], Validators.required]
    });

    this.getPrestations();
    this.getCarByUser();
    this.splitData();
    
    this.isLoading = false;
  }

  constructor(
    private prestationService : PrestationService,
    private carService : CarService,
    private appointmentService : AppointmentService,
    private fb: FormBuilder
  ){}

  getPrestations(){
    
    this.prestationService.getAllPrestations().subscribe({
			next : (data) => {        
				this.prestations = data;
        this.splitData();
			}
		});
  }

  getCarByUser(){
    this.carService.getCars().subscribe({
      next : (data) => {
        this.cars = data
      }
    });
  }

  splitData() {
    const chunkSize = 4; 
    this.columns = [];

    for (let i = 0; i < this.prestations.length; i += chunkSize) {
      this.columns.push(this.prestations.slice(i, i + chunkSize));
    }
  }

  getSelectedCheckboxValues() {
    const prestationsChoisis = this.prestations.filter(item => item.selected);
    const selectedIds = prestationsChoisis.map(item => item._id);
    return selectedIds;
  }

  

  closeDialog(){
    this.isVisible = !this.isVisible;
  }

  onCheckboxChange(event: any, value: string) {
    const prestations: string[] = this.formStep2.value.prestations || [];
  
    if (event.checked) {
      if (!prestations.includes(value)) {
        prestations.push(value);
      }
    } else {
      const index = prestations.indexOf(value);
      if (index !== -1) {
        prestations.splice(index, 1);
      }
    }
  
    this.formStep2.patchValue({ prestations });
  }
  

  insertAppointment(){
    const prestationsChoisis = this.formStep2.value.prestations;
    const appointment = {
      car : this.formStep1.value.car,
      time_start: new Date(this.formStep1.value.date).toISOString(),
    };

    const data = {
      appointment,
      prestationsChoisis
    }    

    this.appointmentService.createAppointment(data).subscribe({
      next: (response) => {
        this.message = 'Rendez-vous créé!'; 
        this.severity = 'success';
        this.isVisible = true;
      },
      error: (error) => {
        this.message = error.message || 'Une erreur est survenue, veuillez réessayer.';
        this.severity = 'error';
        this.isVisible = true;
      }
    });
    
  }
}