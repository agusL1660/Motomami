import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MotoInterface } from '../../../../interfaces/MotoInterface';
import { SharedModule } from '../../../../shared/shared.module';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-item',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.scss'
})
export class ProductoItemComponent {
  @Input() moto!: MotoInterface;
  @Output() verMasInfo = new EventEmitter<MotoInterface>();

 
  constructor(private router: Router){}

  mostrarInformacion(moto: MotoInterface) {
    this.verMasInfo.emit();
  }
  
}
