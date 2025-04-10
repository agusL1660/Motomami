import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MotoInterface } from '../../interfaces/MotoInterface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InformacionMotoService {
  
  private selectedMotoSubject = new BehaviorSubject<MotoInterface | null>(null);
  selectedMoto$: Observable<MotoInterface | null> = this.selectedMotoSubject.asObservable();

  constructor() {}

  seleccionarMoto(moto: MotoInterface): void {
    this.selectedMotoSubject.next(moto);
  }

  limpiarMoto(): void {
    this.selectedMotoSubject.next(null);
  }
}
