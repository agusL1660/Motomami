import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoLogicaService } from '../../core/services/carrito-logica.service';
import { MotoInterface } from '../../interfaces/MotoInterface';
import { PedidosService } from '../../core/services/api/pedidos.service';
import { PedidoInterface } from '../../interfaces/PedidoInterface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

 constructor(private cartService: CarritoLogicaService, private pedidosService: PedidosService) {}

  public getCardNumber():Observable<number>{
    return this.cartService.cartCount$;
  }

  public getItems():Observable<Map<MotoInterface,number>>{
    return this.cartService.items$;
  }

  public getPedidos(pedido: MotoInterface[]):Observable<MotoInterface[]>{
    return this.pedidosService.hacerPedido(pedido);
  }
  
}
