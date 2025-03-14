import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../interfaces/LoginInterface';
import { RegisterInterface } from '../interfaces/RegisterInterface';
import { ResponseAccess } from '../interfaces/ResposeAccess';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://https://circuit-crusaders-laravel-agusl1660.vercel.app/rest/login';
  private http = inject(HttpClient);

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  login(object: LoginInterface): Observable<ResponseAccess> {
    return this.http.post<ResponseAccess>(`${this.apiUrl}/login`, object).pipe(
      tap(response => this.setToken(response.token))
    );
  }

  register(object: RegisterInterface): Observable<RegisterInterface> {
    return this.http.post<RegisterInterface>(`${this.apiUrl}/register`, object);
  } 

  private setToken(token: string): void {
    this.isAuthenticatedSubject.next(true); 
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }
  hasToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token')!=null; 
    }
    return false;
  }
  isAuthenticated(): boolean {
    return !!this.getToken(); 
  }
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.isAuthenticatedSubject.next(false);

  }
}
