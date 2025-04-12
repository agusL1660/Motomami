import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-por-que-elegirnos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './por-que-elegirnos.component.html',
  styleUrl: './por-que-elegirnos.component.scss'
})
export class PorQueElegirnosComponent {
  razones = [
    {
      icono: 'emoji_events',
      titulo: 'Calidad garantizada',
      descripcion: 'Trabajamos con las mejores marcas del mercado.'
    },
    {
      icono: 'local_shipping',
      titulo: 'Envíos a todo el país',
      descripcion: 'Recibí tu moto donde estés, de forma segura y rápida.'
    },
    {
      icono: 'support_agent',
      titulo: 'Atención personalizada',
      descripcion: 'Nuestro equipo está para ayudarte en cada paso.'
    },
    {
      icono: 'credit_score',
      titulo: 'Financiación flexible',
      descripcion: 'Pagá en cuotas sin interés. ¡Acelerá tu compra!'
    }
  ];
}
