import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barber-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative h-screen">
      <div class="absolute inset-0">
        <video autoplay muted loop class="w-full h-full object-cover">
          <source src="https://player.vimeo.com/external/496690810.sd.mp4?s=7b7995a51244ea91e8f32f8d33b3e0b4f4e4158b&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div class="relative h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white" data-aos="fade-up">
            BARBER<span class="text-gold">STYLE</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Donde el estilo clásico se encuentra con las tendencias modernas
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <button class="bg-gold text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105">
              Reserva tu cita
            </button>
            <button class="border-2 border-gold text-gold px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-black transition-all transform hover:scale-105">
              Nuestros servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BarberHeroComponent {}