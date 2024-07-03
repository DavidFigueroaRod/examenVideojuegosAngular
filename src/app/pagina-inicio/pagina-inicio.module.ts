import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VideojuegosService } from './videojuegos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    ProductosComponent,
    ContactoComponent
  ],
  providers: [
    VideojuegosService
  ],
  bootstrap: [
    InicioComponent
  ]
})
export class PaginaInicioModule { }
