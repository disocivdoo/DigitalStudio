import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative h-[80vh] bg-gradient-to-br from-purple-900 to-indigo-900">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      </div>
      <div class="relative h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white" data-aos="fade-up">
            TECH<span class="text-purple-400">STORE</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Descubre la última tecnología al mejor precio
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <button class="bg-purple-600 text-white px-8 py-4 rounded-full font-bold 
                         hover:bg-purple-500 transition-all transform hover:scale-105">
              Ver Productos
            </button>
            <button class="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-bold 
                         hover:bg-purple-400 hover:text-white transition-all transform hover:scale-105">
              Ofertas Especiales
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ShopHeroComponent {}