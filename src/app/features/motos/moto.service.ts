import { Injectable } from '@angular/core';
import { MotosService } from '../../services/motos.service';
import { EstilosService } from '../../services/estilos.service';

import { Observable } from 'rxjs';
import { MotoInterface } from '../../interfaces/MotoInterface';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

 constructor(private motoService: MotosService) {}

  public  getMotos(): Observable<MotoInterface[]> {
    return this.motoService.motos();
  }
}
