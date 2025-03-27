import { HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn =(req,next) => {
  
  const authService = inject(AuthService);

  const token = authService.getToken();
  // Si hay un token, clonamos la request y añadimos el header Authorization
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
  }

  // Si no hay token, enviamos la request sin modificarla
  return next(req).pipe(
    catchError((err)=>{
      if(err.status==400){
        return throwError(()=>"Error en el back");

      }
      return throwError(()=>"No se sabe el error");

    })
  );

}  