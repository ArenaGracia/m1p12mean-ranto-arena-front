import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Article } from '../../shared/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    private apiUrl = `${environment.apiUrl}/api/articles`;
  
    constructor(private http: HttpClient) {}

    getAllArticles (page?: number, limit?: number): Observable<{ articles: Article[], totalRecords: number }>  {
        let httpParams = new HttpParams();
        if (page){ httpParams = httpParams.set("page", page); }
        if (limit){ httpParams = httpParams.set("limit", limit); }
        return this.http.get<{ articles: Article[], totalRecords: number }>(`${this.apiUrl}`, { params: httpParams });
    } 
      
    createArticle(article: any): Observable<Article> {
        console.log(article);
        return this.http.post<any>(this.apiUrl, {article});
    }

    updateArticle(id: string, article: Article): Observable<Article> {
        return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
    }

    deleteArticle(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

}