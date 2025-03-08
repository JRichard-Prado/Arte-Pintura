import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portada',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent {
  showPortada = true;
  constructor(private router: Router) {
    // Suscribirse a los eventos del router
    this.router.events.subscribe(event => {
      // Verificar si el evento es de tipo NavigationEnd
      if (event instanceof NavigationEnd) {
        // Actualizar la propiedad showPortada basado en la URL
        this.showPortada = !event.url.includes('/biografia');
      }
    });
  }

}
