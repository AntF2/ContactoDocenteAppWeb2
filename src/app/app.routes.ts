import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent }, 
  { path: '**', redirectTo: '' } // Redirige rutas desconocidas a Home
];
