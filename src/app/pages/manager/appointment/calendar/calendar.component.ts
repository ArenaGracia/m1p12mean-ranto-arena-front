import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import frLocale from '@fullcalendar/core/locales/fr';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'; 
import listPlugin from '@fullcalendar/list';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../../core/service/appointment.service';
import moment from 'moment';

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [
        CommonModule,
        FullCalendarModule
    ],
    styleUrl: './calendar.component.scss',
    templateUrl: './calendar.component.html',
})
export class CalendarComponent {
    @Input() title: string = 'Calendrier des Rendez-vous';
    // appointments: any[] = [];

    constructor(private router: Router, private route: ActivatedRoute, private appointmentService: AppointmentService) {}

    
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        events: this.fetchEvents.bind(this), // Utilisation de la fonction pour récupérer les événements dynamiquement
        datesSet: this.onDatesSet.bind(this), // Déclenché quand l'affichage change (mois/semaine)
        locale: frLocale,
        headerToolbar: {
            left: 'prev,today,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' // Affichage des boutons similaires à l'image
        },
        buttonText: {
            today: 'Aujourd\'hui',
            month: 'mois',
            week: 'semaine',
            day: 'jour',
            list: 'liste'
          },
        firstDay: 1,
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        
        eventClick: this.handleEventClick.bind(this)
    };

    handleEventClick(eventInfo: any): void {
        const eventId = eventInfo.event.id; // Récupérer l'ID de l'événement
        console.log("Événement cliqué :", eventId);
        this.router.navigate([`manager/quote/details`, eventId]);  // Redirection vers la page de détails
    }
  
    fetchEvents(fetchInfo: any, successCallback: any, failureCallback: any) {
        const startDate = moment(fetchInfo.start).format('YYYY-MM-DD');
        const endDate = moment(fetchInfo.end).format('YYYY-MM-DD');
    
        this.appointmentService.getEvents(startDate, endDate).subscribe(
          (events) => successCallback(events),
          (error) => failureCallback(error)
        );
      }
    
      onDatesSet(dateInfo: any) {
        console.log('Nouvelle plage de dates affichée :', dateInfo.startStr, '->', dateInfo.endStr);
    }
}
