import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = `${environment.apiUrl}/api/email`;

  constructor(private http: HttpClient) {}

  sendEmailConfirmation(email: string, newDate: any, oldDate: string, idQuote: string) {
    return this.http.post(`${this.apiUrl}/confirmation-new-date`, { email, newDate, oldDate, idQuote});
  }

}
