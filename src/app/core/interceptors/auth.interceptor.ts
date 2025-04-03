import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
<<<<<<< Updated upstream
=======
    const urlException = ['auth/login'];

>>>>>>> Stashed changes
    const token = localStorage.getItem('access_token'); 
    

    const authReq = token
        ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })
        : req;
<<<<<<< Updated upstream
    console.log(authReq);
    return next(authReq);
=======

    
    const router = inject(Router);
  

    return next(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            router.navigate(['/reconnect']);
          }
          return throwError(error); 
        })
    );;
>>>>>>> Stashed changes
};