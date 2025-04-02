import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const urlException = ['auth/login']; // url qui n'a pas besoin de token

    const token = localStorage.getItem('access_token'); 

    console.log('Mise en place du token' + token);
    
    const authReq = (token && ! urlException.some(url => req.url.includes(url)))
        ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })
        : req;
    console.log(authReq);

    
    const router = inject(Router);
  

    return next(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Redirection vers la page de connexion en cas de réponse 401 (token expiré ou invalide)
            router.navigate(['/reconnect']);
          }
          return throwError(error); 
        })
    );;
};