import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) {}
  

  getAllMecaniciens(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Mecanicien/`);
  }

}
