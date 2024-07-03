import { Component } from '@angular/core';
import { VideojuegosService } from '../videojuegos.service';
import { IVideojuego } from '../interfaces/videojuego';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  listaVideojuegos: IVideojuego[] = [];
  listaFiltrada: IVideojuego[] = [];
  textoBusqueda: string = '';

  constructor(private _videojuegosService: VideojuegosService) {
    this.obtenerVideojuegos();
  }

  obtenerVideojuegos() {
    this._videojuegosService.getVideojuegos().subscribe({
      next: (data) => {
        this.listaVideojuegos = data;
        this.listaFiltrada = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  filtrarPorCategoria(categoria: string) {
    this.textoBusqueda = '';
    this.listaFiltrada = this.listaVideojuegos.filter(v => v.categoria === categoria);
  }

  obtenerTodos() {
    this.textoBusqueda = '';
    this.listaFiltrada = this.listaVideojuegos;
  }

  buscar() {
    if (this.textoBusqueda.trim() === '') {
      this.listaFiltrada = this.listaVideojuegos;
    } else {
      this.listaFiltrada = this.listaVideojuegos.filter(v =>
        v.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        v.descripcion.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      );
    }
  }
}
