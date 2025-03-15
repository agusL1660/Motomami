import { inject, Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EstilosService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  
  constructor() {}

  estilos(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/estilos`)
  }

}
