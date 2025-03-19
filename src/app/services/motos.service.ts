import { inject, Injectable } from '@angular/core';
import { environment } from '../core/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MotoInterface } from '../interfaces/MotoInterface';

@Injectable({
  providedIn: 'root'
})
export class MotosService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  
  constructor() {}

  motos(): Observable<MotoInterface[]> {
      return this.http.get<MotoInterface[]>(`${this.apiUrl}/motos`)
  }
}
