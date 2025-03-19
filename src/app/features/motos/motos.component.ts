import { Component } from '@angular/core';
import { ProductosComponent } from "./productos/productos.component";
import { EstilosComponent } from './estilos/estilos.component';

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [ProductosComponent,EstilosComponent],
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.scss'
})
export class MotosComponent {

}
