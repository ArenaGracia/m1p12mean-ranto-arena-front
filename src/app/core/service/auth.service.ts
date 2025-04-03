import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'access_token';
  public isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

  private apiUrl = `${environment.apiUrl}`;
  
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, { email, password });
  }

  signup(name: string, first_name: string, email: string, password: string,contact: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/client/sign-up`, { name, first_name, email, password, contact });
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.isLoggedIn$.next(true);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getUserInfo() {
    const token = this.getToken();
    if (!token) return null;
  
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }

  isLoggedRight(profile : string){
    const payload = this.getUserInfo();
    if (payload == null || payload.profile == null) return false; 
    if(payload.profile == profile) return true;
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
  }
  
  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
