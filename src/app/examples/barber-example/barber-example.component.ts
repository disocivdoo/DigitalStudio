import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BarberHeroComponent } from './components/barber-hero/barber-hero.component';
import { BarberServicesComponent } from './components/barber-services/barber-services.component';
import { BarberTeamComponent } from './components/barber-team/barber-team.component';
import { BarberGalleryComponent } from './components/barber-gallery/barber-gallery.component';

@Component({
  selector: 'app-barber-example',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BarberHeroComponent,
    BarberServicesComponent,
    BarberTeamComponent,
    BarberGalleryComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-900">
      <!-- Header -->
      <header class="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-20">
            <h1 class="text-2xl font-bold">
              <span class="text-white">BARBER</span>
              <span class="text-gold">STYLE</span>
            </h1>
            <nav class="hidden md:flex space-x-8">
              <a href="#" class="text-white hover:text-gold transition-colors">Inicio</a>
              <a href="#" class="text-white hover:text-gold transition-colors">Servicios</a>
              <a href="#" class="text-white hover:text-gold transition-colors">Equipo</a>
              <a href="#" class="text-white hover:text-gold transition-colors">Galería</a>
            </nav>
            <div class="flex items-center space-x-4">
              <a routerLink="/" class="text-gold hover:text-white transition-colors">Volver</a>
              <button class="bg-gold text-black px-6 py-2 rounded-full font-bold 
                           hover:bg-white transition-colors">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <app-barber-hero></app-barber-hero>
        <app-barber-services></app-barber-services>
        <app-barber-team></app-barber-team>
        <app-barber-gallery></app-barber-gallery>

        <!-- Contact Section -->
        <section class="py-20 bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-4xl font-bold text-white mb-8" data-aos="fade-up">
                  Visítanos
                </h2>
                <div class="space-y-6">
                  <div class="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <fa-icon [icon]="faLocationDot" class="text-gold text-xl"></fa-icon>
                    </div>
                    <div>
                      <h3 class="text-white font-bold">Dirección</h3>
                      <p class="text-gray-400">Av. Principal 123, Santiago</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <fa-icon [icon]="faPhone" class="text-gold text-xl"></fa-icon>
                    </div>
                    <div>
                      <h3 class="text-white font-bold">Teléfono</h3>
                      <p class="text-gray-400">+56 9 1234 5678</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <fa-icon [icon]="faWhatsapp" class="text-gold text-xl"></fa-icon>
                    </div>
                    <div>
                      <h3 class="text-white font-bold">WhatsApp</h3>
                      <p class="text-gray-400">+56 9 8765 4321</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <fa-icon [icon]="faClock" class="text-gold text-xl"></fa-icon>
                    </div>
                    <div>
                      <h3 class="text-white font-bold">Horario</h3>
                      <p class="text-gray-400">Lun - Sáb: 10:00 - 20:00</p>
                      <p class="text-gray-400">Dom: 11:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-[400px] rounded-lg overflow-hidden" data-aos="fade-left">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.997087564267!2d-70.6482!3d-33.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzE0LjAiUyA3MMKwMzgnNTMuNSJX!5e0!3m2!1ses!2scl!4v1625761234567!5m2!1ses!2scl"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="bg-black py-8">
        <div class="container mx-auto px-4 text-center">
          <p class="text-gray-400">
            © 2024 BarberStyle. Todos los derechos reservados.
          </p>
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
  `]
})
export class BarberExampleComponent {
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faWhatsapp = faWhatsapp;
  faClock = faClock;
}