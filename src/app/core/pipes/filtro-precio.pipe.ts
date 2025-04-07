import { Pipe, PipeTransform } from '@angular/core';
import { MotoInterface } from '../../interfaces/MotoInterface';

@Pipe({
  name: 'filtroPrecio',
  standalone: true
})
export class FiltroPrecioPipe implements PipeTransform {

  transform(motos: MotoInterface[], arg:string) {
    if (!motos || motos.length === 0) return [];

    let ordenar = [...motos]; // Evita mutar el array original

    ordenar.sort((a, b) => a.monto - b.monto);

    switch (arg) {
      case 'menor':
        return ordenar;
      case 'mayor':
        return ordenar.reverse(); // <- ✅ AHORA SÍ ESTÁ BIEN
      case '':
      default:
        return motos;
    }
  }

}
