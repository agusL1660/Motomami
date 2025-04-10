import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/api/auth.service';
import { inject } from '@angular/core';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authService = inject(AuthService);

  const token = authService.getToken();
  // Si hay un token, clonamos la request y añadimos el header Authorization
 // if (token) {
 console.log("Hay token?", token);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)    
  });
 // }
  return next(authReq);

}
