import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private apiUrl = `${environment.apiUrl}/api/payment`;

    constructor(private http: HttpClient) { }

    makePayment(payment: any, amountLeft: number): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, { payment, amountLeft });
    }

    getPaymentSummary(quoteId: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/summary/${quoteId}` );
    }   

    getTotalRevenue(dateStart: string, dateEnd: string): Observable<Number> {
        let params = new HttpParams()
            .set('dateStart', dateStart)
            .set('dateEnd', dateEnd);
        return this.http.get<Number>(`${this.apiUrl}/revenue/total/`, { params } );
    }

    getRevenueDaily(dateStart: string, dateEnd: string): Observable<any> {
        let params = new HttpParams()
            .set('dateStart', dateStart)
            .set('dateEnd', dateEnd);
        return this.http.get<any>(`${this.apiUrl}/revenue/daily/`, { params } );
    }

    getRevenueMonthly(dateStart: string, dateEnd: string): Observable<any> {
        let params = new HttpParams()
            .set('dateStart', dateStart)
            .set('dateEnd', dateEnd);
        return this.http.get<any>(`${this.apiUrl}/revenue/monthly/`, { params } );
    }

}