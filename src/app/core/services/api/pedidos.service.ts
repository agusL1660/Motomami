import { inject, Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { PedidoInterface } from '../../../interfaces/PedidoInterface';
import { map, Observable, tap } from 'rxjs';
import { LoginInterface } from '../../../interfaces/LoginInterface';
import { ResponseAccess } from '../../../interfaces/ResposeAccess';
import { MotoInterface } from '../../../interfaces/MotoInterface';
import { PedidosMercadoPago } from '../../../interfaces/pedidos-mercado-pago';
import { MercadoPagoResponse } from '../../../interfaces/mercado-pago-response';

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

  /*
  mercadoPago(allProducts: PedidosMercadoPago[]):Observable<{ id: string }> {
    sessionStorage.setItem('productosPendientes', JSON.stringify(allProducts));
    
    const body = {
      allProducts,
      back_urls: {
        success: 'http://localhost:4200/',
        failure: 'http://localhost:4200/',
        pending: 'http://localhost:4200/'
      }
    };
    
   
    return this.http.post<{ id: string }>(`${this.apiUrl}/process_payment`, body);
  }
  */
}
