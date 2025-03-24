import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import 'swiper/css/bundle';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';


@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, RouterOutlet,MenuPrincipalComponent],
=======
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

@Component({
  selector: 'app-proyectos',
  imports: [MenuPrincipalComponent],
>>>>>>> 3436c8243ce8fa9f43467549bd743f44d058d385
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {
  title = 'Titulo de Proyectos';
  ngOnInit(): void {
    let swiper: Swiper;
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      speed: 3500,

      // slidesPerView: 1,
      grabCursor: true,
      centeredSlides: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,

      },
      effect: 'cube',
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 30,
        shadowScale: 1,
      },
      autoplay: {
        delay: 3000,
      },
    });
  }

}
