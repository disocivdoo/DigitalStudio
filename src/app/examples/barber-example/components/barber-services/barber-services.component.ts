import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

interface BarberService {
  name: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
  image: string;
}

@Component({
  selector: 'app-barber-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 text-white" data-aos="fade-up">
          Nuestros Servicios
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index"
               class="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <img [src]="service.image" [alt]="service.name" 
                 class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-white">{{service.name}}</h3>
                <span class="text-gold font-bold">{{service.price}}</span>
              </div>
              <div class="flex items-center text-gray-400 mb-4">
                <fa-icon [icon]="faClock" class="mr-2"></fa-icon>
                <span>{{service.duration}}</span>
              </div>
              <p class="text-gray-400 mb-4">{{service.description}}</p>
              <ul class="space-y-2">
                <li *ngFor="let item of service.includes" 
                    class="flex items-center text-gray-300">
                  <fa-icon [icon]="faCheck" class="text-gold mr-2"></fa-icon>
                  <span>{{item}}</span>
                </li>
              </ul>
              <button class="w-full mt-6 bg-gold text-black py-3 rounded-lg font-bold 
                           hover:bg-white transition-colors">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BarberServicesComponent {
  faClock = faClock;
  faCheck = faCheck;

  services: BarberService[] = [
    {
      name: 'Corte Clásico',
      price: '$15.000',
      duration: '45 minutos',
      description: 'Corte tradicional con acabado profesional',
      includes: [
        'Consulta de estilo',
        'Lavado de cabello',
        'Masaje capilar',
        'Styling final'
      ],
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a'
    },
    {
      name: 'Barba Completa',
      price: '$12.000',
      duration: '30 minutos',
      description: 'Perfilado y arreglo completo de barba',
      includes: [
        'Perfilado preciso',
        'Afeitado tradicional',
        'Tratamiento hidratante',
        'Aceites especiales'
      ],
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033'
    },
    {
      name: 'Combo Premium',
      price: '$25.000',
      duration: '75 minutos',
      description: 'La experiencia completa de barbería',
      includes: [
        'Corte de cabello',
        'Arreglo de barba',
        'Masaje facial',
        'Productos premium'
      ],
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1'
    }
  ];
}