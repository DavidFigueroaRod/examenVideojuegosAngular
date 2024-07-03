import { Component } from '@angular/core';
import { IVideojuego } from '../interfaces/videojuego';
import { VideojuegosService } from '../videojuegos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  listaVideojuegos: IVideojuego[] = [];

  constructor(private _videojuegosService: VideojuegosService) {
    this.obtenerPrimerosTresVideojuegos();
  }

  obtenerPrimerosTresVideojuegos() {
    this._videojuegosService.getVideojuegos().subscribe({
      next: (data) => {
        this.listaVideojuegos = data.slice(3, 6);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
