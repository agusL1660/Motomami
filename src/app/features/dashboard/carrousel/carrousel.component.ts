import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {
  index = 0;

  frases = [
    {
      texto: 'Sentí la velocidad en cada curva.',
      imagen: "https://cdn.shopify.com/s/files/1/0608/7819/2888/files/kawasaki-ninja-2023.jpg?v=1674124860.jpg"
    },
    {
      texto: 'Dueño de la ciudad, rey del asfalto.',
      imagen: "https://andromedamoto.com/cdn/shop/articles/bmw-r-ninet-racer_83298855-cef8-44e7-b1f7-4de388c5b11e.jpg?v=1650974199.jpg"
    },
    {
      texto: 'Explorá sin límites.',
      imagen: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D.jpg"
    },
    {
      texto: 'Tu nueva moto te espera... ¡con descuento!',
      imagen: "https://images.unsplash.com/photo-1625677797043-42cc0255f62f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5kdXJvfGVufDB8fDB8fHww.jpg"
    }
  ];

  siguiente() {
    this.index = (this.index + 1) % this.frases.length;
  }

  anterior() {
    this.index = (this.index - 1 + this.frases.length) % this.frases.length;
  }
  
}

