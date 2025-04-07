import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptorFn,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ReturnStatement } from '@angular/compiler';

export const ErrorInterceptor: HttpInterceptorFn =(req,next) => {
  //req es la peticion, y next da lugar al siguiente interceptor
  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    let mensajeError = 'Ocurrió un error inesperado';
    if (error.status === 0) {
      mensajeError = 'Error de conexión con el servidor';
    } else if (error.status >= 400 && error.status < 500) {
      mensajeError = `Error del cliente: ${error.error?.message || error.message}`;
    } else if (error.status >= 500) {
      mensajeError = 'Error en el servidor. Intenta más tarde.';
    }
    return throwError(()=>mensajeError);
    }))
}