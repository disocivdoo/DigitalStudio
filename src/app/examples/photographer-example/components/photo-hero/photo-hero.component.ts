import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative h-screen">
      <div class="absolute inset-0">
        <video autoplay muted loop class="w-full h-full object-cover">
          <source src="https://player.vimeo.com/external/384761655.sd.mp4?s=383040d91152a1e4dbee53177d2646f3a5c78bea&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div class="relative h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 class="text-6xl md:text-8xl font-light tracking-wider mb-6" data-aos="fade-up">
            JUAN PÉREZ
          </h1>
          <p class="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-8" data-aos="fade-up" data-aos-delay="200">
            FOTOGRAFÍA ARTÍSTICA
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <button class="border-2 border-white px-12 py-4 text-lg tracking-wider
                         hover:bg-white hover:text-black transition-all transform hover:scale-105">
              EXPLORAR
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PhotoHeroComponent {}