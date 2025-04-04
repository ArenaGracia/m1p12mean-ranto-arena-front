import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Prestation } from '../../shared/models/Prestation';
import { Quote } from '../../shared/models/Quote';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
    private apiUrl = `${environment.apiUrl}/api/prestations`;
  
    constructor(private http: HttpClient) {}

    getAllPrestations (): Observable<Prestation[]> {
        return this.http.get<Prestation[]>(`${this.apiUrl}`);
    } 
      
    createPrestation(prestation: any, brands: any[]): Observable<Prestation> {
        return this.http.post<any>(this.apiUrl, {prestation, brands});
    }

    updatePrestation(id: string, prestation: Prestation): Observable<Prestation> {
        return this.http.put<Prestation>(`${this.apiUrl}/${id}`, prestation);
    }

    deletePrestation(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

}