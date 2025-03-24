import { Routes } from '@angular/router';
import { BiografiaComponent } from './componentes/biografia/biografia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

export const routes: Routes = [
    {path: 'home', component: AppComponent},
    {path: 'biografia', component: BiografiaComponent}, 
    {path: 'proyectos', component: ProyectosComponent}, 
    {path: 'blog', component: BlogComponent}, 
    {path: 'contacto', component: ContactoComponent}, 
    {path: 'notfound', component: NotFoundComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
];

