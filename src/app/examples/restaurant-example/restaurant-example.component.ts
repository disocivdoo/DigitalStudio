import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { RestaurantHeroComponent } from './components/restaurant-hero/restaurant-hero.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { RestaurantAboutComponent } from './components/restaurant-about/restaurant-about.component';
import { RestaurantGalleryComponent } from './components/restaurant-gallery/restaurant-gallery.component';
import { RestaurantReservationComponent } from './components/restaurant-reservation/restaurant-reservation.component';

@Component({
  selector: 'app-restaurant-example',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    RestaurantHeroComponent,
    RestaurantMenuComponent,
    RestaurantAboutComponent,
    RestaurantGalleryComponent,
    RestaurantReservationComponent
  ],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Header -->
      <header class="fixed w-full z-50 transition-all duration-300" 
              [class.bg-black]="scrolled" 
              [class.bg-transparent]="!scrolled">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-24">
            <h1 class="text-3xl font-serif text-white italic">Ristorante Italiano</h1>
            <nav class="hidden lg:flex space-x-8">
              <span class="text-white cursor-default">Inicio</span>
              <span class="text-white cursor-default">Menú</span>
              <span class="text-white cursor-default">Historia</span>
              <span class="text-white cursor-default">Galería</span>
              <span class="text-white cursor-default">Reservas</span>
            </nav>
            <div class="flex items-center space-x-6">
              <span class="hidden md:flex items-center text-white">
                <fa-icon [icon]="faPhone" class="mr-2"></fa-icon>
                <span>+56 9 1234 5678</span>
              </span>
              <a routerLink="/" class="text-gold hover:text-white transition-colors">Volver</a>
              <span class="bg-gold text-black px-6 py-3 rounded-full font-bold cursor-default">
                Reservar Mesa
              </span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <app-restaurant-hero id="home"></app-restaurant-hero>
        <app-restaurant-menu id="menu"></app-restaurant-menu>
        <app-restaurant-about id="about"></app-restaurant-about>
        <app-restaurant-gallery id="gallery"></app-restaurant-gallery>
        <app-restaurant-reservation id="reservation"></app-restaurant-reservation>

        <!-- Contact Info Section -->
        <section class="py-20 bg-white">
          <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-3 gap-12">
              <div class="text-center" data-aos="fade-up">
                <fa-icon [icon]="faMapMarkerAlt" class="text-4xl text-gold mb-4"></fa-icon>
                <h3 class="text-xl font-bold mb-2">Ubicación</h3>
                <p class="text-gray-600">Av. Italia 1234, Providencia<br>Santiago, Chile</p>
              </div>
              <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                <fa-icon [icon]="faPhone" class="text-4xl text-gold mb-4"></fa-icon>
                <h3 class="text-xl font-bold mb-2">Reservas</h3>
                <p class="text-gray-600">+56 9 1234 5678</p>
              </div>
              <div class="text-center" data-aos="fade-up" data-aos-delay="400">
                <fa-icon [icon]="faClock" class="text-4xl text-gold mb-4"></fa-icon>
                <h3 class="text-xl font-bold mb-2">Horario</h3>
                <p class="text-gray-600">Lun - Dom: 12:00 - 23:00<br>Happy Hour: 17:00 - 19:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="bg-black text-white py-16">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-12">
            <div>
              <h3 class="text-3xl font-serif italic mb-6">Ristorante Italiano</h3>
              <p class="text-gray-400 leading-relaxed">
                Un viaje culinario por los sabores más auténticos de Italia, 
                donde cada plato cuenta una historia de tradición y pasión.
              </p>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-6">Horario de Atención</h4>
              <ul class="space-y-4 text-gray-400">
                <li class="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span>12:00 - 23:00</span>
                </li>
                <li class="flex justify-between">
                  <span>Sábado</span>
                  <span>12:00 - 00:00</span>
                </li>
                <li class="flex justify-between">
                  <span>Domingo</span>
                  <span>12:00 - 22:00</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-6">Newsletter</h4>
              <p class="text-gray-400 mb-4">
                Suscríbete para recibir nuestras novedades y eventos especiales.
              </p>
              <div class="flex gap-2">
                <input type="email" placeholder="Tu email" 
                       class="flex-1 bg-gray-900 px-4 py-2 rounded-lg text-white 
                              focus:outline-none focus:ring-2 focus:ring-gold"
                       disabled>
                <span class="bg-gold text-black px-6 py-2 rounded-lg font-bold cursor-default">
                  Enviar
                </span>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Ristorante Italiano. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .text-gold {
      color: #D4AF37;
    }
    .bg-gold {
      background-color: #D4AF37;
    }
    .ring-gold {
      --tw-ring-color: #D4AF37;
    }
  `]
})
export class RestaurantExampleComponent {
  scrolled = false;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 50;
      });
    }
  }
}