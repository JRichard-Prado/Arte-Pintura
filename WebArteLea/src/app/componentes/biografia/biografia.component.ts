import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

@Component({
  selector: 'app-biografia',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './biografia.component.html',
  styleUrl: './biografia.component.css'
})
export class BiografiaComponent {
  titulo = 'Test Biografia';
  footerUrl = 'https://www.google.com';
  footerLink = 'www.google.com';
}
