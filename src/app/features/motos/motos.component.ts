import { Component } from '@angular/core';
import { ProductosComponent } from "./productos/productos.component";
import { EstilosComponent } from './estilos/estilos.component';
import { InfoProductosComponent } from "./info-productos/info-productos.component";
import { MotoInterface } from '../../interfaces/MotoInterface';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [ProductosComponent, EstilosComponent,SharedModule],
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.scss'
})
export class MotosComponent {
  motoSeleccionada!: MotoInterface; 

  constructor(private router: Router) {}

  verMasInformacion(moto: MotoInterface) {
    this.router.navigate(['/motos/informacion', moto.nro_moto]);
  }
}
