import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6" data-aos="fade-up">
            ¡No te pierdas nuestras ofertas!
          </h2>
          <p class="text-purple-200 mb-8" data-aos="fade-up" data-aos-delay="200">
            Suscríbete a nuestro newsletter y recibe un 10% de descuento en tu primera compra
          </p>
          <form class="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
            <input type="email" placeholder="Tu correo electrónico" 
                   class="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 
                          focus:ring-purple-400">
            <button type="submit" 
                    class="bg-purple-600 text-white px-8 py-4 rounded-full font-bold 
                           hover:bg-purple-500 transition-colors transform hover:scale-105">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class NewsletterComponent {}