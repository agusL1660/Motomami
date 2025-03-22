import { Component } from '@angular/core';
import { MotoService } from '../moto.service';
import { SharedModule } from '../../../shared/shared.module';
import { MotoInterface } from '../../../interfaces/MotoInterface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  motos: MotoInterface[]= [];

  constructor(private motoService: MotoService) {}

  ngOnInit() {
    this.getMotos().subscribe(motos => this.motos = motos);
  }
  
  public getMotos() {
    return this.motoService.getMotos();
  }

}
