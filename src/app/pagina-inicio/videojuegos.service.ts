import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVideojuego } from './interfaces/videojuego';


@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  private _endpoint: string = environment.endPoint;
  private _apiUrl: string = `${this._endpoint}Videojuego/`;

  constructor(private http: HttpClient) { }

  // Método para obtener todos los videojuegos
  getVideojuegos(): Observable<IVideojuego[]> {
    return this.http.get<IVideojuego[]>(`${this._apiUrl}ListaVideojuegos`);
  }

  // Método para obtener videojuegos por categoría
  getVideojuegosPorCategoria(categoria: string): Observable<IVideojuego[]> {
    return this.http.get<IVideojuego[]>(`${this._apiUrl}ListaVideojuegos/${categoria}`);
  }
}
