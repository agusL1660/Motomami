import { Component } from '@angular/core';
import { ProductosComponent } from "./productos/productos.component";

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [ProductosComponent],
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.scss'
})
export class MotosComponent {

}
