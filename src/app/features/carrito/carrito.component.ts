import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MotoInterface } from '../../interfaces/MotoInterface';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  items: Map<MotoInterface,number>=new Map();

  constructor(private carrito: CarritoService){}

  ngOnInit(){
    this.carrito.getItems().subscribe(items => {
      this.items = items;
    });
  }
  trackById(index: number, item: any) {
    return item.id;
  }
  total(): number{
    let total=0;

    if (this.items instanceof Map) {
      this.items.forEach((cantidad, moto) => {
        total += Number(moto.monto) * cantidad;
      });
    }
    
    return total
  }
}
