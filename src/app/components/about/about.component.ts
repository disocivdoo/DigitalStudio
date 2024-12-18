import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6" data-aos="fade-up">
              Sobre Mí
            </h2>
            <p class="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Estudiante de Ingeniería en Informática apasionado por crear experiencias digitales únicas y funcionales
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6" data-aos="fade-right">
              <h3 class="text-2xl font-bold mb-4">Mi Enfoque</h3>
              <p class="text-gray-600">
                Como estudiante de tercer año de Ingeniería en Informática, combino mis conocimientos académicos
                con la práctica real en desarrollo web. Me especializo en crear sitios web modernos y funcionales,
                aplicando las últimas tecnologías y mejores prácticas del mercado.
              </p>
              
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                  <span>Diseño web responsivo y moderno</span>
                </div>
                <div class="flex items-center space-x-3">
                  <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                  <span>Desarrollo con tecnologías actuales</span>
                </div>
                <div class="flex items-center space-x-3">
                  <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                  <span>Soluciones personalizadas</span>
                </div>
                <div class="flex items-center space-x-3">
                  <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                  <span>Compromiso con cada proyecto</span>
                </div>
              </div>
            </div>

            <div class="relative" data-aos="fade-left">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                   alt="Desarrollador trabajando" 
                   class="rounded-lg shadow-xl">
              <div class="absolute -bottom-6 -right-6 bg-gold text-black p-6 rounded-lg">
                <p class="font-bold text-xl">Desarrollo Web</p>
                <p>Innovador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-gold {
      color: #D4AF37;
    }
    .bg-gold {
      background-color: #D4AF37;
    }
  `]
})
export class AboutComponent {
  faCheck = faCheck;
}