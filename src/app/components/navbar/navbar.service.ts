import { Injectable } from '@angular/core';
import { EstilosService } from '../../core/services/api/estilos.service';

import { Observable } from 'rxjs';
import { EstiloInterface } from '../../interfaces/EstiloInterface';
import { CarritoLogicaService } from '../../core/services/carrito-logica.service';
import { MotoInterface } from '../../interfaces/MotoInterface';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

 constructor(private estiloService: EstilosService,private cartService: CarritoLogicaService) {}

  public getEstilos(): Observable<EstiloInterface[]> {
    return this.estiloService.estilos();
  }
  public getCardNumber():Observable<number>{
    return this.cartService.cartCount$;
  }

  public getItems():Observable<MotoInterface[]>{
    return this.cartService.items$;
  }
}
