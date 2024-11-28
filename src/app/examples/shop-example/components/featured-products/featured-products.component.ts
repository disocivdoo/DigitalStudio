import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  discount?: number;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Productos Destacados
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let product of products; let i = index"
               class="bg-white rounded-2xl shadow-lg overflow-hidden group"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div class="relative overflow-hidden">
              <img [src]="product.image" [alt]="product.name"
                   class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
              <div *ngIf="product.discount" 
                   class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -{{product.discount}}%
              </div>
              <button class="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center
                           text-gray-600 hover:text-red-500 transition-colors transform hover:scale-110">
                <fa-icon [icon]="faHeart"></fa-icon>
              </button>
            </div>
            <div class="p-6">
              <div class="text-sm text-purple-600 mb-2">{{product.category}}</div>
              <h3 class="text-xl font-bold mb-2">{{product.name}}</h3>
              <div class="flex items-center mb-4">
                <div class="flex text-yellow-400">
                  <fa-icon [icon]="faStar" *ngFor="let star of [1,2,3,4,5]"
                          [class.text-gray-300]="star > product.rating">
                  </fa-icon>
                </div>
                <span class="text-gray-500 text-sm ml-2">({{product.rating}}.0)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-2xl font-bold">{{formatPrice(product.price)}}</span>
                  <span *ngIf="product.discount" 
                        class="text-gray-400 line-through ml-2">
                    {{formatPrice(calculateOriginalPrice(product))}}
                  </span>
                </div>
                <button class="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-500 
                             transition-colors transform hover:scale-110">
                  <fa-icon [icon]="faShoppingCart"></fa-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturedProductsComponent {
  faShoppingCart = faShoppingCart;
  faStar = faStar;
  faHeart = faHeart;

  products: Product[] = [
    {
      id: 1,
      name: 'Smartwatch Pro X',
      price: 299990,
      rating: 5,
      category: 'Wearables',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      discount: 20
    },
    {
      id: 2,
      name: 'Auriculares Premium',
      price: 149990,
      rating: 4,
      category: 'Audio',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },
    {
      id: 3,
      name: 'Lentes VR Ultra',
      price: 399990,
      rating: 5,
      category: 'Realidad Virtual',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac',
      discount: 15
    },
    {
      id: 4,
      name: 'Drone 4K Pro',
      price: 599990,
      rating: 4,
      category: 'Drones',
      image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9'
    }
  ];

  formatPrice(price: number): string {
    return `$${price.toLocaleString('es-CL')}`;
  }

  calculateOriginalPrice(product: Product): number {
    if (!product.discount) return product.price;
    return Math.round(product.price / (1 - product.discount / 100));
  }
}