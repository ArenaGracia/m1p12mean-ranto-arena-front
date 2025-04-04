import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../../shared/models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
    private apiUrl = `${environment.apiUrl}/api/appointment`;

    constructor(private http: HttpClient) { }

    getEvents(startDate: string, endDate: string): Observable<any> {
        let params = new HttpParams()
            .set('startDate', startDate)
            .set('endDate', endDate);

        return this.http.get<any>(`${this.apiUrl}/calendar`, { params });
    }

    endAppointment (appointmentId: string, quoteId: string, appointmentLeft: number): Observable<any> {
        return this.http.put(`${this.apiUrl}/end`, {appointmentId, quoteId, appointmentLeft});
    }

    createAppointment(appointment: any): Observable<any> {
        return this.http.post<Appointment>(this.apiUrl, appointment);
    }
}
