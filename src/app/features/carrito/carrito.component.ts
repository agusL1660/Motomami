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
  items: MotoInterface[]=[];

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

    if(this.items){

      this.items.forEach(item => {
        total += Number(item.monto); 
      });
    }
    else{
      total=0
    }
    
    return total
  }
}
