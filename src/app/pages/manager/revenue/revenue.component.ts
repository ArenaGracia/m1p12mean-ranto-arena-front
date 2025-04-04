import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import moment from 'moment';
import { PaymentService } from '../../../core/service/payment.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-revenue',
    standalone: true,
    imports: [
        CommonModule, 
        CardModule, 
        ButtonModule,
        DatePickerModule,
        FloatLabelModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule,
        ChartModule
    ],
    providers: [MessageService],
    templateUrl: './revenue.component.html',
    styleUrl: './revenue.component.scss',
})
export class RevenueComponent {
    totalRevenue: Number = 0;

    startDate: Date;
    endDate: Date;
    private originalStartDate!: Date;
    private originalEndDate!: Date;

    data: any;
    options: any;

    dailyrevenue: any;

    constructor(private paymentService: PaymentService, private messageService: MessageService) {
        this.startDate = moment().subtract(1, 'month').toDate();
        this.endDate = moment().toDate();
    }


    ngOnInit() {
        this.initGlobalRevenue();
    }

    initGlobalRevenue () {
        this.originalStartDate = new Date(this.startDate);
        this.originalEndDate = new Date(this.endDate);

        this.paymentService.getTotalRevenue(this.startDate.toISOString(), this.endDate.toISOString()).subscribe({
            next:(data: any) =>{
                this.totalRevenue = data.totalRevenue;
            }, error:(error)=> {
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: error.error.message, life: 3000 });
            },
        });

        this.paymentService.getRevenueDaily(this.startDate.toISOString(), this.endDate.toISOString()).subscribe({
            next:(data: any) => {
                this.dailyrevenue = this.transformRevenueData(data.dailyRevenue);
                console.log(this.dailyrevenue.totals);
                
                this.initChart();
            }
        });
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--p-text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
        const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

        this.data = {
            labels: this.dailyrevenue.dates,
            datasets: [
                {
                    label: 'Revenue Journalier',
                    data: this.dailyrevenue.totals,
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                    tension: 0.4
                },
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    transformRevenueData(data: any[]): { dates: string[], totals: number[] } {
        const dates = data.map(entry => entry.date);
        const totals = data.map(entry => entry.total);
    
        return { dates, totals };
    }

    datesChanged(): boolean {
        return (
            this.startDate.getTime() !== this.originalStartDate.getTime() ||
            this.endDate.getTime() !== this.originalEndDate.getTime()
        );
    }
}
