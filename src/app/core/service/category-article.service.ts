import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryArticle } from '../../shared/models/Article';

@Injectable({
  providedIn: 'root'
})
export class CategoryArticleService {
  private apiUrl = `${environment.apiUrl}/api/categoriesArticle`;
  constructor(private http: HttpClient) { }

  getCategoriesArticle(): Observable<CategoryArticle[]> {
    return this.http.get<CategoryArticle[]>(this.apiUrl);
  }

  getCategoryArticleById(id: string): Observable<CategoryArticle> {
    return this.http.get<CategoryArticle>(`${this.apiUrl}/${id}`);
  }

  createCategoryArticle(category: CategoryArticle): Observable<CategoryArticle> {
    return this.http.post<CategoryArticle>(this.apiUrl, category);
  }

  updateCategoryArticle(id: string, category: CategoryArticle): Observable<CategoryArticle> {
    return this.http.put<CategoryArticle>(`${this.apiUrl}/${id}`, category);
  }

  deleteCategoryArticle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
