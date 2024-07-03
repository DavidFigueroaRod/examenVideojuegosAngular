import { Routes } from '@angular/router';
import { InicioComponent } from './pagina-inicio/inicio/inicio.component';
import { ContactoComponent } from './pagina-inicio/contacto/contacto.component';
import { ProductosComponent } from './pagina-inicio/productos/productos.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'productos', component: ProductosComponent}
];
