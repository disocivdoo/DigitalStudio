import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  category: string;
}

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-light text-center mb-16 tracking-wider" data-aos="fade-up">
          PORTFOLIO
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div *ngFor="let image of gallery; let i = index"
               class="relative group overflow-hidden"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <img [src]="image.src" 
                 alt="Gallery image" 
                 class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white text-lg tracking-wider">{{image.category}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PhotoGalleryComponent {
  gallery: GalleryImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
      category: 'PORTRAITS'
    },
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      category: 'FASHION'
    },
    {
      src: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114',
      category: 'WEDDINGS'
    },
    {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      category: 'NATURE'
    },
    {
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      category: 'ARCHITECTURE'
    },
    {
      src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
      category: 'TRAVEL'
    },
    {
      src: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44',
      category: 'FASHION'
    },
    {
      src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
      category: 'PORTRAITS'
    }
  ];
}