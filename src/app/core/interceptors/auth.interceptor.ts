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
    return next(authReq);
};