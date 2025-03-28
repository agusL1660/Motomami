import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoLogicaService } from '../../core/services/carrito-logica.service';
import { MotoInterface } from '../../interfaces/MotoInterface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

 constructor(private cartService: CarritoLogicaService) {}

  public getCardNumber():Observable<number>{
    return this.cartService.cartCount$;
  }

  public getItems():Observable<MotoInterface[]>{
    return this.cartService.items$;
  }
}
