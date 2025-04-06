import { Pipe, PipeTransform } from '@angular/core';
import { MotoInterface } from '../../interfaces/MotoInterface';

@Pipe({
  name: 'filtroMarca',
  standalone: true
})
export class FiltroMarcaPipe implements PipeTransform {

  transform(motos: MotoInterface[], marca: string) {
    marca = marca.toLowerCase(); //lo pongo todo en minusculas para que no haya errores de filtrado

    let retorno: MotoInterface[]=[];
    if(marca!=""){
      retorno = motos.filter(moto=>moto.marca.toLowerCase().includes(marca)); //retorna las motos que incluyan la marca
    }
    else{
      retorno=motos;
    }

    return retorno;
  }

}
