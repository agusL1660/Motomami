import { Component } from '@angular/core';
//import { PedidoService } from './pedidos.service';
import { MotoInterface } from '../../interfaces/MotoInterface';
import { SharedModule } from '../../shared/shared.module';
import { PedidosService } from '../../core/services/api/pedidos.service';
import { PedidoInterface } from '../../interfaces/PedidoInterface';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {

  pedidos: PedidoInterface[] =[];

  constructor(private pedidoService: PedidosService){}
  
  ngOnInit() {
    this.getPedidos().subscribe(motos => this.pedidos = motos);
  }

  getPedidos(){
    return this.pedidoService.obtenerPedidos();
  }
  
  trackById(index: number, item: any) {
    return item.id;
  }
}
