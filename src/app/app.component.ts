import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PaginaInicioModule } from './pagina-inicio/pagina-inicio.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,PaginaInicioModule, HttpClientModule, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examenVideojuegos';
}
