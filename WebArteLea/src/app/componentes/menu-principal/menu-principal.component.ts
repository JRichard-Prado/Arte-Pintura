import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  imports: [RouterOutlet,RouterOutlet, RouterLinkActive ],
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent {

}
