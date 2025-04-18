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

  getAllTasks(page: number, size:number, filters: any): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", page);
    httpParams = httpParams.set("size", size);
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
          httpParams = httpParams.set(key, filters[key]);
      }
    });
    return this.http.get<any[]>(`${this.apiUrl}/`, { params: httpParams });
  } 

  getNonAffectedTasks(page: number, size:number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", page);
    httpParams = httpParams.set("size", size);
    return this.http.get<any[]>(`${this.apiUrl}/non-affected`, { params: httpParams });
  } 

  affect(taskId: string, userId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/affect/`, {taskId, userId});
  }

  end(taskId: string, estimatedDuration: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/end`, {taskId, estimatedDuration});
  }
}
