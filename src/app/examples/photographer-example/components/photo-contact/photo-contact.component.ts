import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-photo-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-light text-center mb-16 tracking-wider" data-aos="fade-up">
          CONTACTO
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div class="space-y-8">
            <div data-aos="fade-right">
              <h3 class="text-2xl font-light mb-4">INFORMACIÓN</h3>
              <p class="text-gray-400">
                Para consultas sobre sesiones fotográficas o cualquier otro servicio, 
                no dudes en contactarme.
              </p>
            </div>
            
            <div data-aos="fade-right" data-aos-delay="200">
              <h4 class="font-light mb-2">Email</h4>
              <p class="text-gray-400">contacto&#64;juanperez.com</p>
            </div>
            
            <div data-aos="fade-right" data-aos-delay="400">
              <h4 class="font-light mb-2">Teléfono</h4>
              <p class="text-gray-400">+56 9 1234 5678</p>
            </div>
            
            <div class="flex space-x-4" data-aos="fade-right" data-aos-delay="600">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <fa-icon [icon]="faInstagram"></fa-icon>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <fa-icon [icon]="faFacebookF"></fa-icon>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <fa-icon [icon]="faTwitter"></fa-icon>
              </a>
            </div>
          </div>
          
          <form class="space-y-6" data-aos="fade-left">
            <div>
              <input type="text" placeholder="Nombre" 
                     class="w-full bg-transparent border border-gray-800 px-4 py-3 
                            focus:outline-none focus:border-white transition-colors">
            </div>
            <div>
              <input type="email" placeholder="Email" 
                     class="w-full bg-transparent border border-gray-800 px-4 py-3 
                            focus:outline-none focus:border-white transition-colors">
            </div>
            <div>
              <textarea rows="5" placeholder="Mensaje"
                        class="w-full bg-transparent border border-gray-800 px-4 py-3 
                               focus:outline-none focus:border-white transition-colors"></textarea>
            </div>
            <button type="submit" 
                    class="w-full border border-white px-8 py-3 text-white hover:bg-white 
                           hover:text-black transition-colors">
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class PhotoContactComponent {
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
}