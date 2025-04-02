import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl = `${environment.apiUrl}/api/states`;

  constructor(private http: HttpClient) {}

  // type : quote, appointment, task
  getAllStates(type:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${type}`);
  }

}
