import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Quote } from '../../shared/models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
    private apiUrl = `${environment.apiUrl}/api/quote`;
  
    constructor(private http: HttpClient) {}

    getQuoteByState (stateValue: number): Observable<Quote[]> {
        return this.http.get<Quote[]>(`${this.apiUrl}/state/${stateValue}`);
    }
    
    
}  