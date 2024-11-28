import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barber-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 text-white" data-aos="fade-up">
          Galería de Trabajos
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div *ngFor="let image of gallery; let i = index"
               class="aspect-square overflow-hidden rounded-lg"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 50">
            <img [src]="image" 
                 alt="Trabajo de barbería" 
                 class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
          </div>
        </div>
      </div>
    </section>
  `
})
export class BarberGalleryComponent {
  gallery: string[] = [
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
    'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8',
    'https://images.unsplash.com/photo-1593702295094-ac9a661c3d34',
    'https://images.unsplash.com/photo-1565647952915-9644fcd446a9',
    'https://images.unsplash.com/photo-1584441405886-bc91be61e56a',
    'https://images.unsplash.com/photo-1517832606299-7ae9b720a186'
  ];
}