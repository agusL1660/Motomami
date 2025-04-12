import { Component } from '@angular/core';
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { PorQueElegirnosComponent } from "./por-que-elegirnos/por-que-elegirnos.component";
import { ContactoComponent } from "./contacto/contacto.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CarrouselComponent, PorQueElegirnosComponent, ContactoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
