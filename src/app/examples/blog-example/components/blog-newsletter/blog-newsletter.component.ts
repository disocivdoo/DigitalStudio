import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-20 bg-indigo-600">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-white mb-6" data-aos="fade-up">
            ¡Suscríbete a nuestro newsletter!
          </h2>
          <p class="text-indigo-200 mb-8" data-aos="fade-up" data-aos-delay="200">
            Recibe las últimas actualizaciones y artículos directamente en tu bandeja de entrada
          </p>
          <form class="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
            <input type="email" placeholder="Tu correo electrónico" 
                   class="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 
                          focus:ring-indigo-400">
            <button type="submit" 
                    class="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold 
                           hover:bg-indigo-50 transition-colors transform hover:scale-105">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class BlogNewsletterComponent {}