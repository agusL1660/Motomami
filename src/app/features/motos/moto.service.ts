import { Injectable } from '@angular/core';
import { MotosService } from '../../core/services/motos.service';
import { EstilosService } from '../../core/services/estilos.service';

import { Observable } from 'rxjs';
import { MotoInterface } from '../../interfaces/MotoInterface';
import { EstiloInterface } from '../../interfaces/EstiloInterface';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

 constructor(private motoService: MotosService,private estiloService: EstilosService) {}

  public  getMotos(): Observable<MotoInterface[]> {
    return this.motoService.motos();
  }
  public getEstilos(): Observable<EstiloInterface[]> {
    return this.estiloService.estilos();
  }
}
