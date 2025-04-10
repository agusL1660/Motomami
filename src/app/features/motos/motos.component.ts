import { Component } from '@angular/core';
import { ProductosComponent } from "./productos/productos.component";
import { EstilosComponent } from './estilos/estilos.component';
import { InformacionMotoService } from '../../core/services/informacion-moto.service';
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

  constructor(private router: Router,private motoInformacion: InformacionMotoService) {}

  verMasInformacion(moto: MotoInterface) {
    this.motoInformacion.seleccionarMoto(moto);
    this.router.navigate(['/motos/informacion', moto.nro_moto]);
  }
}
