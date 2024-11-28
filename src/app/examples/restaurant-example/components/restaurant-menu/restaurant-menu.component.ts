import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  tags?: string[];
}

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-serif text-center mb-16" data-aos="fade-up">
          Nuestro Menú
        </h2>

        <!-- Menu Categories -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap">
          <button *ngFor="let cat of categories"
                  (click)="setActiveCategory(cat)"
                  [class.bg-gold]="activeCategory === cat"
                  [class.text-white]="activeCategory === cat"
                  class="px-6 py-2 rounded-full border border-gold text-gold hover:bg-gold 
                         hover:text-white transition-colors">
            {{cat}}
          </button>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div *ngFor="let item of filteredItems; let i = index"
               class="flex gap-6 items-center group"
               [class.hidden]="!showAllItems && i >= 6"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div class="relative w-24 h-24 flex-shrink-0">
              <img [src]="item.image" [alt]="item.name"
                   class="w-full h-full rounded-full object-cover transition-transform 
                          duration-500 group-hover:scale-110">
              <div *ngIf="item.tags && item.tags.length > 0" 
                   class="absolute -top-2 -right-2 bg-gold text-black text-xs px-2 py-1 
                          rounded-full font-bold">
                {{item.tags[0]}}
              </div>
            </div>
            <div class="flex-1">
              <div class="flex justify-between items-baseline mb-2">
                <h3 class="text-xl font-bold">{{item.name}}</h3>
                <div class="border-b border-dotted border-gray-300 flex-grow mx-4"></div>
                <span class="text-gold font-bold">{{item.price}}</span>
              </div>
              <p class="text-gray-600">{{item.description}}</p>
            </div>
          </div>
        </div>

        <!-- Show More Button -->
        <div class="text-center mt-12" *ngIf="filteredItems.length > 6">
          <button (click)="toggleShowAll()"
                  class="group inline-flex items-center gap-2 px-8 py-3 border-2 border-gold 
                         text-gold rounded-full hover:bg-gold hover:text-white transition-colors">
            <span>{{showAllItems ? 'Ver menos' : 'Ver más'}}</span>
            <fa-icon [icon]="faChevronDown" 
                    [class.rotate-180]="showAllItems"
                    class="transition-transform duration-300">
            </fa-icon>
          </button>
        </div>
      </div>
    </section>
  `
})
export class RestaurantMenuComponent {
  faChevronDown = faChevronDown;
  showAllItems = false;
  activeCategory = 'Todos';
  categories = ['Todos', 'Entradas', 'Principales', 'Pastas', 'Postres'];

  menuItems: MenuItem[] = [
    {
      name: 'Carpaccio di Manzo',
      description: 'Finas láminas de res con rúcula, parmesano y aceite de oliva',
      price: '$12.900',
      category: 'Entradas',
      image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a',
      tags: ['Nuevo']
    },
    {
      name: 'Bruschetta al Pomodoro',
      description: 'Pan tostado con tomates frescos, albahaca y ajo',
      price: '$8.900',
      category: 'Entradas',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f'
    },
    {
      name: 'Ossobuco alla Milanese',
      description: 'Osobuco braseado con azafrán y gremolata',
      price: '$22.900',
      category: 'Principales',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947'
    },
    {
      name: 'Spaghetti alle Vongole',
      description: 'Spaghetti con almejas, ajo, vino blanco y perejil',
      price: '$18.900',
      category: 'Pastas',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8'
    },
    {
      name: 'Fettuccine Alfredo',
      description: 'Pasta fresca con salsa cremosa de parmesano',
      price: '$16.900',
      category: 'Pastas',
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a'
    },
    {
      name: 'Tiramisú',
      description: 'Clásico postre italiano con café y mascarpone',
      price: '$8.900',
      category: 'Postres',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9'
    },
    {
      name: 'Panna Cotta',
      description: 'Crema cocida con frutos rojos',
      price: '$7.900',
      category: 'Postres',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777'
    },
    {
      name: 'Ravioli di Zucca',
      description: 'Ravioles rellenos de calabaza con salsa de mantequilla y salvia',
      price: '$17.900',
      category: 'Pastas',
      image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa'
    },
    {
      name: 'Bistecca alla Fiorentina',
      description: 'T-bone a la parrilla con hierbas y aceite de oliva',
      price: '$32.900',
      category: 'Principales',
      image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659',
      tags: ['Especial']
    }
  ];

  get filteredItems() {
    return this.activeCategory === 'Todos' 
      ? this.menuItems 
      : this.menuItems.filter(item => item.category === this.activeCategory);
  }

  toggleShowAll() {
    this.showAllItems = !this.showAllItems;
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
    this.showAllItems = false;
  }
}