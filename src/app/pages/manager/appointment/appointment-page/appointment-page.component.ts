import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-appointment-page',
    standalone: true,
    imports: [
        CommonModule,
        CalendarComponent,
        CardModule
    ],
    templateUrl: './appointment-page.component.html',
})
export class AppointmentPageComponent { 
    appointments: any[] = [];


}
