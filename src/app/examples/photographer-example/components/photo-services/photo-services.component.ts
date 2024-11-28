import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCameraRetro, faImage, faVideo } from '@fortawesome/free-solid-svg-icons';

interface Service {
  title: string;
  description: string;
  icon: any;
  price: string;
}

@Component({
  selector: 'app-photo-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-light text-center mb-16 text-white tracking-wider" data-aos="fade-up">
          SERVICIOS
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index"
               class="border border-gray-800 p-8 text-center group hover:border-white transition-colors"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 200">
            <div class="w-16 h-16 mx-auto mb-6 text-gray-500 group-hover:text-white transition-colors">
              <fa-icon [icon]="service.icon" class="text-4xl"></fa-icon>
            </div>
            <h3 class="text-2xl font-light mb-4 text-white">{{service.title}}</h3>
            <p class="text-gray-400 mb-6">{{service.description}}</p>
            <p class="text-2xl font-light text-white">{{service.price}}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PhotoServicesComponent {
  faCameraRetro = faCameraRetro;
  faImage = faImage;
  faVideo = faVideo;

  services: Service[] = [
    {
      title: 'RETRATOS',
      description: 'Sesiones fotográficas profesionales para capturar tu mejor versión.',
      icon: faCameraRetro,
      price: 'Desde $150.000'
    },
    {
      title: 'EVENTOS',
      description: 'Cobertura completa de eventos sociales y corporativos.',
      icon: faImage,
      price: 'Desde $300.000'
    },
    {
      title: 'BODAS',
      description: 'Documentación artística de tu día especial.',
      icon: faVideo,
      price: 'Desde $500.000'
    }
  ];
}