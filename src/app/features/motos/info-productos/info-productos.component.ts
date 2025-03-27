import { Component, Input, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MotoInterface } from '../../../interfaces/MotoInterface';
import { Router } from '@angular/router';
import { CarritoLogicaService } from '../../../core/services/carrito-logica.service';

@Component({
  selector: 'app-info-productos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './info-productos.component.html',
  styleUrl: './info-productos.component.scss'
})
export class InfoProductosComponent {

  @Input() moto!: MotoInterface;
  items=0;

  constructor(private router: Router,private cartService: CarritoLogicaService){
    const state = history.state;
    if (state.moto) {
      this.moto = state.moto;
    } else {
      this.router.navigateByUrl('/motos'); 
    }
  }
  
  regresar() {
    this.router.navigateByUrl('/motos');
  }
  
  aumento(item: MotoInterface) {
    this.cartService.addToCart();
    this.cartService.addItemToCart(item);
  }
    
}
