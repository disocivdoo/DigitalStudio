import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center text-white">
      <div class="absolute inset-0">
        <!-- Mejoramos el background con un gradiente más profesional -->
        <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent z-20"></div>
        <div class="bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')] 
             bg-cover bg-center absolute inset-0 bg-fixed"></div>
      </div>
      <div class="relative z-30 text-center px-4 max-w-5xl mx-auto">
        <h1 class="text-4xl md:text-7xl font-bold mb-8" data-aos="fade-up">
          Transformamos Ideas en 
          <span class="text-gold block mt-2">Experiencias Digitales</span>
        </h1>
        <p class="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed" 
           data-aos="fade-up" data-aos-delay="200">
          Desarrollo web moderno y creativo para hacer crecer tu presencia digital
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6" 
             data-aos="fade-up" data-aos-delay="400">
          <a (click)="scrollToSection('contact', $event)" 
             class="bg-gold text-black px-8 py-4 rounded-lg font-bold 
                    hover:bg-white transition-all transform hover:scale-105 
                    shadow-lg hover:shadow-xl cursor-pointer">
            Iniciar Proyecto
          </a>
          <a (click)="scrollToSection('portfolio', $event)" 
             class="border-2 border-white px-8 py-4 rounded-lg font-bold 
                    hover:bg-white hover:text-black transition-all transform 
                    hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            Ver Proyectos
          </a>
        </div>
        <!-- Indicadores actualizados -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" 
             data-aos="fade-up" data-aos-delay="600">
          <div>
            <h3 class="text-3xl font-bold text-gold">10+</h3>
            <p class="text-gray-300">Proyectos Realizados</p>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gold">100%</h3>
            <p class="text-gray-300">Compromiso</p>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gold">2+</h3>
            <p class="text-gray-300">Años Programando</p>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gold">24/7</h3>
            <p class="text-gray-300">Soporte Dedicado</p>
          </div>
        </div>
      </div>
      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    .text-gold {
      color: var(--color-gold);
    }
    .bg-gold {
      background-color: var(--color-gold);
    }
  `]
})
export class HeroComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToSection(sectionId: string, event: Event) {
    this.scrollService.scrollToSection(sectionId, event);
  }
}