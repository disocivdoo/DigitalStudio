import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCode,
  faMobile,
  faSearch,
  faGlobe,
  faRocket,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="services" class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6" data-aos="fade-up">
            Servicios Profesionales
          </h2>
          <p class="text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Ofrezco soluciones digitales completas y personalizadas para ayudarte 
            a alcanzar tus objetivos de negocio
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index"
               class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow 
                      border border-gray-100 group"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div class="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6
                        group-hover:bg-gold/20 transition-colors">
              <fa-icon [icon]="service.icon" class="text-2xl text-gold"></fa-icon>
            </div>
            <h3 class="text-xl font-bold mb-4">{{service.title}}</h3>
            <p class="text-gray-600 mb-6">{{service.description}}</p>
            <ul class="space-y-3">
              <li *ngFor="let feature of service.features" 
                  class="flex items-center text-gray-700">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span>
                {{feature}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  faCode = faCode;
  faMobile = faMobile;
  faSearch = faSearch;
  faGlobe = faGlobe;
  faRocket = faRocket;
  faHeadset = faHeadset;

  services: Service[] = [
    {
      icon: faCode,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y funcionales que destacan tu marca',
      features: [
        'Diseño responsivo',
        'Optimización de rendimiento',
        'Código limpio y mantenible',
        'Integración de CMS'
      ]
    },
    {
      icon: faRocket,
      title: 'Marketing Digital',
      description: 'Estrategias efectivas para aumentar tu presencia online',
      features: [
        'SEO técnico',
        'Analítica web',
        'Optimización de conversión',
        'Estrategias de contenido'
      ]
    },
    {
      icon: faMobile,
      title: 'Aplicaciones Web',
      description: 'Soluciones web progresivas para tu negocio',
      features: [
        'PWA development',
        'Integración de APIs',
        'Base de datos optimizada',
        'Seguridad avanzada'
      ]
    },
    {
      icon: faGlobe,
      title: 'E-Commerce',
      description: 'Tiendas online optimizadas para vender más',
      features: [
        'Carrito de compras',
        'Gestión de inventario',
        'Pasarelas de pago',
        'Panel administrativo'
      ]
    },
    {
      icon: faSearch,
      title: 'SEO & Performance',
      description: 'Optimización para buscadores y rendimiento',
      features: [
        'Auditoría técnica',
        'Optimización de velocidad',
        'Estructura de datos',
        'Monitoreo de rankings'
      ]
    },
    {
      icon: faHeadset,
      title: 'Soporte & Mantenimiento',
      description: 'Mantenimiento continuo y soporte técnico',
      features: [
        'Actualizaciones regulares',
        'Copias de seguridad',
        'Monitoreo 24/7',
        'Soporte prioritario'
      ]
    }
  ];
}