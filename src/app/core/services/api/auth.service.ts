import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../../../interfaces/LoginInterface';
import { RegisterInterface } from '../../../interfaces/RegisterInterface';
import { ResponseAccess } from '../../../interfaces/ResposeAccess';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../enviroments/enviroment';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.tokenService.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();


  constructor() {}

  login(object: LoginInterface): Observable<ResponseAccess> {
    return this.http.post<ResponseAccess>(`${this.apiUrl}/login`, object).pipe(
      //pipe: encadenar operadores RxJS que transforman, filtran o interactúan con los datos del observable
      //tap: no modifica el valor que pasa por el Observable, pero te deja ejecutar lógica adicional.
      tap(response => {
        console.log('RESPUESTA LOGIN:', response.access_token); // 👈 Revisá qué trae
        //this.tokenService.saveToken(response.access_token);
      })
    );
  }

  register(object: RegisterInterface): Observable<ResponseAccess> {
    return this.http.post<ResponseAccess>(`${this.apiUrl}/register`, object);
    //Se toma como convencion que el registro no genera token y te lleva al login para iniciar sesion
  } 
  
  isAuthenticated(): boolean {
    return this.tokenService.hasToken();
  }

  autenticar(){
    this.isAuthenticatedSubject.next(true);
  }

  getToken(): string | null {
    return this.tokenService.getToken();
  }

  logout(): void {
    this.tokenService.clearToken();
    this.isAuthenticatedSubject.next(false);
  }
}
