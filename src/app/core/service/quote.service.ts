import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Quote } from '../../shared/models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
    private apiUrl = `${environment.apiUrl}/api/quotes`;
  
    constructor(private http: HttpClient) {}

    getQuotes (): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/`);
    }

    getQuoteByState (stateValue: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/state/${stateValue}`);
    }

    getQuoteById (id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
    
    validateQuote (quoteId: string): Observable<Quote> {
        return this.http.put<Quote>(`${this.apiUrl}/validate/${quoteId}`, {});
    }
    
    cancelQuote (quoteId: string, useremail: string): Observable<Quote> {
        return this.http.put<Quote>(`${this.apiUrl}/cancel/${quoteId}`, {email: useremail });
    }
    
    updateDiscount (quoteId: string, discount: number): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/discount/${quoteId}`, {discount});
    }

    getQuoteByUser() : Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/client`);
    }
}  