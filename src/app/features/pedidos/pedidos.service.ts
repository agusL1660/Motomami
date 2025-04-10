import { Injectable } from '@angular/core';
import { PedidosService } from '../../core/services/api/pedidos.service';

import { Observable } from 'rxjs';
import { MotoInterface } from '../../interfaces/MotoInterface';
import { PedidoInterface } from '../../interfaces/PedidoInterface';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

 constructor(private pedidoService: PedidosService) {}

  public getPedidos(): Observable<PedidoInterface[]> {
    return this.pedidoService.obtenerPedidos();
  }
/*
  hacerPedido(motos: MotoInterface[]): Observable<MotoInterface[]> {
    return this.pedidoService.hacerPedido(motos);
  }
*/
}
