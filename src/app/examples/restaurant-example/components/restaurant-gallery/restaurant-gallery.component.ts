import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  url: string;
  category: string;
  title: string;
}

@Component({
  selector: 'app-restaurant-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-serif text-center mb-16" data-aos="fade-up">
          Nuestra Galería
        </h2>

        <!-- Gallery Categories -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap" data-aos="fade-up">
          <button *ngFor="let cat of categories"
                  (click)="setActiveCategory(cat)"
                  [class.bg-gold]="activeCategory === cat"
                  [class.text-white]="activeCategory === cat"
                  class="px-6 py-2 rounded-full border border-gold text-gold hover:bg-gold 
                         hover:text-white transition-colors">
            {{cat}}
          </button>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div *ngFor="let image of filteredImages; let i = index"
               class="relative group aspect-square overflow-hidden rounded-xl"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <img [src]="image.url" 
                 [alt]="image.title" 
                 class="w-full h-full object-cover transition-transform duration-700 
                        group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-lg font-bold mb-2">{{image.title}}</h3>
                <p class="text-sm text-gray-300">{{image.category}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class RestaurantGalleryComponent {
  activeCategory = 'Todos';
  categories = ['Todos', 'Platos', 'Ambiente', 'Eventos'];

  gallery: GalleryImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      category: 'Platos',
      title: 'Especialidad del Chef'
    },
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
      category: 'Platos',
      title: 'Pasta Fresca'
    },
    {
      url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
      category: 'Ambiente',
      title: 'Terraza al Atardecer'
    },
    {
      url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696',
      category: 'Platos',
      title: 'Risotto de la Casa'
    },
    {
      url: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d',
      category: 'Ambiente',
      title: 'Bar & Lounge'
    },
    {
      url: 'https://images.unsplash.com/photo-1481833761820-0509d3217039',
      category: 'Eventos',
      title: 'Celebraciones Especiales'
    },
    {
      url: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5',
      category: 'Platos',
      title: 'Postres Artesanales'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      category: 'Ambiente',
      title: 'Salón Principal'
    },
    {
      url: 'https://images.unsplash.com/photo-1543353071-873f17a7a088',
      category: 'Eventos',
      title: 'Eventos Corporativos'
    },
    {
      url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      category: 'Platos',
      title: 'Antipasti Selección'
    },
    {
      url: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b',
      category: 'Ambiente',
      title: 'Cocina en Vivo'
    }
  ];

  get filteredImages() {
    return this.activeCategory === 'Todos'
      ? this.gallery
      : this.gallery.filter(img => img.category === this.activeCategory);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }
}