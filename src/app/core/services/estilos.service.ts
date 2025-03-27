import { inject, Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { EstiloInterface } from '../../interfaces/EstiloInterface';

@Injectable({
  providedIn: 'root'
})
export class EstilosService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  
  constructor() {}

  estilos(): Observable<EstiloInterface[]> {
      return this.http.get<EstiloInterface[]>(`${this.apiUrl}/estilos`)
  }

}
