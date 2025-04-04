import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../../shared/models/Brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = `${environment.apiUrl}/api/brands`;
  constructor(private http: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  getBrandsWithNoImage(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/noImage`);
  }

  getBrandById(id: string): Observable<Brand> {
    return this.http.get<Brand>(`${this.apiUrl}/${id}`);
  }

  createBrand(Brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.apiUrl, Brand);
  }

  updateBrand(id: string, Brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(`${this.apiUrl}/${id}`, Brand);
  }

  deleteBrand(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
