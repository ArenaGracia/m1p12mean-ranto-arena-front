import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/api/tasks`;

  constructor(private http: HttpClient) {}

  getAllTasks(page: number, size:number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", page);
    httpParams = httpParams.set("size", size);
    return this.http.get<any[]>(`${this.apiUrl}/`, { params: httpParams });
  } 
}
