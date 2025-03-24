import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  imports: [RouterLink,RouterOutlet],
=======
import { RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  imports: [RouterOutlet,RouterOutlet, RouterLinkActive ],
>>>>>>> 3436c8243ce8fa9f43467549bd743f44d058d385
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent {
titulo='menu principal';
}
