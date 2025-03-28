import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, findIndex } from 'rxjs';
import { MotoInterface } from '../../interfaces/MotoInterface';

@Injectable({
  providedIn: 'root'
})
export class CarritoLogicaService {
  private cartCount = new BehaviorSubject<number>(0); // Estado del carrito
  cartCount$ = this.cartCount.asObservable(); // Observable para el navbar
  private items = new BehaviorSubject<MotoInterface[]>([]);
  items$ = this.items.asObservable();

  constructor() { }
  
  addToCart(): void {
    this.cartCount.next(this.cartCount.value + 1);
  }
  
  addItemToCart(item: MotoInterface): void {
    let aux= this.items.value.concat(item);
    this.items.next(aux);
  }
  removeItem(): void {
    if (this.cartCount.value > 0) {
      this.cartCount.next(this.cartCount.value - 1);
    }
  }
  
  removeItemToCart(item: MotoInterface): void {
    

    const currentItems = this.items.value.filter(i => i !== item);
    this.items.next(currentItems);
  }
  
  getCartCount(): number {
    return this.cartCount.value;
  }

  getItems():MotoInterface[]{
    return this.items.value;
  }
}
