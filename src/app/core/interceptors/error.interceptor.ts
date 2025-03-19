import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let mensajeError = 'Ocurrió un error inesperado';
        if (error.status === 0) {
          mensajeError = 'Error de conexión con el servidor';
        } else if (error.status >= 400 && error.status < 500) {
          mensajeError = `Error del cliente: ${error.error?.message || error.message}`;
        } else if (error.status >= 500) {
          mensajeError = 'Error en el servidor. Intenta más tarde.';
        }

        console.error('Interceptor de error:', mensajeError);
        return throwError(() => new Error(mensajeError));
      })
    );
  }
}
