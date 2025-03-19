import { Component } from '@angular/core';
import { EstiloInterface } from '../../../interfaces/EstiloInterface';
import { SharedModule } from '../../../shared/shared.module';
import { MotoService } from '../moto.service';

@Component({
  selector: 'app-estilos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './estilos.component.html',
  styleUrl: './estilos.component.scss'
})
export class EstilosComponent {

  estilos: EstiloInterface []= [];


  constructor(private motoService: MotoService) {}
  
  ngOnInit() {
    this.getEstilos().subscribe(estilos => this.estilos = estilos);
  }

  getEstilos(){
    return this.motoService.getEstilos();
  }
 
}
