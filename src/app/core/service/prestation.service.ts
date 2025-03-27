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
    private apiUrl = `${environment.apiUrl}/api/prestation`;
  
    constructor(private http: HttpClient) {}

    getAllPrestations (): Observable<Prestation[]> {
        return this.http.get<Prestation[]>(`${this.apiUrl}`);
    } 
}