import { Component, Input, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MotoInterface } from '../../interfaces/MotoInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoLogicaService } from '../../core/services/carrito-logica.service';
import { InformacionMotoService } from '../../core/services/informacion-moto.service';

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

  constructor(private router: Router,private cartService: CarritoLogicaService,private motoSeleccionadaService: InformacionMotoService){
    this.motoSeleccionadaService.selectedMoto$.subscribe(moto => {
      if (!moto) {
        this.router.navigateByUrl('/motos');
      } else {
        this.moto = moto;
      }
    });
  }
  
  regresar() {
    this.motoSeleccionadaService.limpiarMoto();
    this.router.navigateByUrl('/motos');
  }

  aumento(item: MotoInterface) {
    this.motoSeleccionadaService.limpiarMoto();
    this.cartService.addToCart();
    this.cartService.addItemToCart(item);
  }

    
}
