import { Component, Input, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MotoInterface } from '../../../interfaces/MotoInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoLogicaService } from '../../../core/services/carrito-logica.service';
import { MotosService } from '../../../core/services/motos.service';


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

  constructor(private router: Router,private cartService: CarritoLogicaService,private route: ActivatedRoute,private motosService: MotosService){
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (id) {
      this.obtenerMotoPorId(+id); // Convierte a número y busca la moto
    } else {
      this.router.navigateByUrl('/motos'); // Redirige si no hay ID
    }
  }
  
  regresar() {
    this.router.navigateByUrl('/motos');
  }

  obtenerMotoPorId(id: number) {
    this.motosService.getMotoById(id).subscribe({
      next: (motos) => this.moto = motos,
      error: () => this.router.navigateByUrl('/motos') // Si hay error, vuelve a /motos
    });
  }

  aumento(item: MotoInterface) {
    this.cartService.addToCart();
    this.cartService.addItemToCart(item);
  }
    
}
