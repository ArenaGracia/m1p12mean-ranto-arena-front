import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('access_token'); 

    console.log('Mise en place du token' + token);
    

    const authReq = token
        ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })
        : req;
    console.log(authReq);

    
  const authService = inject(AuthService);
  const router = inject(Router);
  

    return next(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Redirection vers la page de connexion en cas de réponse 401 (token expiré ou invalide)
            router.navigate(['/unauthorized']);
          }
          return throwError(error); 
        })
    );;
};