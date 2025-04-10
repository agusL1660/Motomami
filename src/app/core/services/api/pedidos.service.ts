import { inject, Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { PedidoInterface } from '../../../interfaces/PedidoInterface';
import { map, Observable, tap } from 'rxjs';
import { LoginInterface } from '../../../interfaces/LoginInterface';
import { ResponseAccess } from '../../../interfaces/ResposeAccess';
import { MotoInterface } from '../../../interfaces/MotoInterface';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() { }

  obtenerPedidos(): Observable<PedidoInterface[]> {
    return this.http.get<{data:  PedidoInterface[]}>(`${this.apiUrl}/historial`).pipe(
      map(res => res.data) 
    );;
  }

  hacerPedido(object: MotoInterface[]): Observable<MotoInterface[]> {
    return this.http.post<MotoInterface[]>(`${this.apiUrl}/pedido`, object);
  }
  
}
