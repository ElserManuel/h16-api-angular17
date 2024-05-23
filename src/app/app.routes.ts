import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'almacen', component: AlmacenComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}

];
