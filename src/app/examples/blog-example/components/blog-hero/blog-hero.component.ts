import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative h-[70vh] bg-gradient-to-br from-indigo-900 to-purple-900">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      </div>
      <div class="relative h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white" data-aos="fade-up">
            DEV<span class="text-indigo-400">BLOG</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Explorando el mundo del desarrollo web y compartiendo experiencias
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <button class="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold 
                         hover:bg-indigo-500 transition-all transform hover:scale-105">
              Últimos Artículos
            </button>
            <button class="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-full font-bold 
                         hover:bg-indigo-400 hover:text-white transition-all transform hover:scale-105">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BlogHeroComponent {}