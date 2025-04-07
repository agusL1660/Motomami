import { HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn =(req,next) => {
  

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