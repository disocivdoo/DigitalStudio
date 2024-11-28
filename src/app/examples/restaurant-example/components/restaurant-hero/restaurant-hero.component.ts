import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-hero',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="relative h-screen">
      <div class="absolute inset-0">
        <!-- Background Image -->
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop" 
          alt="Restaurant background" 
          class="w-full h-full object-cover"
        />
        <!-- Overlay with video -->
        <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60">
          <source src="https://player.vimeo.com/external/372308414.sd.mp4?s=6e3e8dba2c6c837240aac53dc2b5544116668702&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      <div class="relative h-full flex items-center justify-center text-center px-4">
        <div>
          <p class="text-gold uppercase tracking-widest mb-4" data-aos="fade-up">
            Bienvenidos a
          </p>
          <h1 class="text-6xl md:text-8xl font-serif italic mb-6 text-white" data-aos="fade-up" data-aos-delay="200">
            Ristorante Italiano
          </h1>
          <p class="text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Una experiencia gastronómica única con los mejores sabores de Italia
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="600">
            <a
               class="group bg-gold text-black px-8 py-4 rounded-full font-bold inline-flex 
                      items-center justify-center hover:bg-white transition-all duration-300 
                      transform hover:scale-105">
              Explorar Menú
              <fa-icon [icon]="faArrowRight" 
                      class="ml-2 transform group-hover:translate-x-1 transition-transform">
              </fa-icon>
            </a>
            <a 
               class="border-2 border-gold text-gold px-8 py-4 rounded-full font-bold 
                      hover:bg-gold hover:text-black transition-all duration-300 
                      transform hover:scale-105">
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p class="text-sm uppercase tracking-widest mb-4">Descubre más</p>
        <div class="animate-bounce">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  `
})
export class RestaurantHeroComponent {
  faArrowRight = faArrowRight;
}