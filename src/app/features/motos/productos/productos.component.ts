import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MotoService } from '../moto.service';
import { SharedModule } from '../../../shared/shared.module';
import { MotoInterface } from '../../../interfaces/MotoInterface';
import { Router } from '@angular/router';
import { ProductoItemComponent } from "./producto-item/producto-item.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [SharedModule, ProductoItemComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  motos: MotoInterface[]= [];
  @Input() moto!: MotoInterface[];
  @Output() verInfo = new EventEmitter<MotoInterface>();
  constructor(private motoService: MotoService,private router: Router) {}

  ngOnInit() {
    this.getMotos().subscribe(motos => this.motos = motos);
  }
  
  public getMotos() {
    return this.motoService.getMotos();
  }

  
  trackById(index: number, item: any) {
    return item.id;
  }
}
