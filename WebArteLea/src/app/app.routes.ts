import { Routes } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { BiografiaComponent } from './componentes/biografia/biografia.component';

export const routes: Routes = [

    {path: 'cabecera', component: CabeceraComponent},
    {path: 'portada', component: PortadaComponent},   
    {path: 'menu-principal', component: MenuPrincipalComponent}, 
    {path: 'biografia', component: BiografiaComponent}, 
];