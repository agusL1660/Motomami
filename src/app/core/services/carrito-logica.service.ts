import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, findIndex } from 'rxjs';
import { MotoInterface } from '../../interfaces/MotoInterface';

@Injectable({
  providedIn: 'root'
})
export class CarritoLogicaService {
  private cartCount = new BehaviorSubject<number>(0); // Estado del carrito
  cartCount$ = this.cartCount.asObservable(); // Observable para el navbar
  private items = new BehaviorSubject<Map<MotoInterface, number>>(new Map());
  items$ = this.items.asObservable();
  
  
  constructor() { }
  
  addToCart(): void {
    this.cartCount.next(this.cartCount.value + 1);
  }

  removeItem(): void {
    if (this.cartCount.value > 0) {
      this.cartCount.next(this.cartCount.value - 1);
    }
  }
  getCartCount(): number {
    return this.cartCount.value;
  }
  addItemToCart(item: MotoInterface): void {
    const currentMap = this.items.value;
    const updatedMap = new Map(currentMap);
  
    const cantidadActual = updatedMap.get(item) ?? 0;
    updatedMap.set(item, cantidadActual + 1);
  
    this.items.next(updatedMap);
  }
  
  removeItemToCart(item: MotoInterface): void {
    const currentMap = this.items.value;
    const updatedMap = new Map(currentMap);
  
    const cantidadActual = updatedMap.get(item);
    if (cantidadActual && cantidadActual > 1) {
      updatedMap.set(item, cantidadActual - 1);
    } else {
      updatedMap.delete(item);
    }
  
    this.items.next(updatedMap);
  }
  
  getItems(): Map<MotoInterface, number> {
    return this.items.value;
  }
}
