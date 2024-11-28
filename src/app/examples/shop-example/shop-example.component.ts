import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { ShopHeroComponent } from './components/shop-hero/shop-hero.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@Component({
  selector: 'app-shop-example',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ShopHeroComponent,
    FeaturedProductsComponent,
    CategoriesComponent,
    NewsletterComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="fixed w-full z-50 bg-white shadow-sm">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-20">
            <h1 class="text-2xl font-bold">
              TECH<span class="text-purple-600">STORE</span>
            </h1>
            <nav class="hidden md:flex space-x-8">
              <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors">Inicio</a>
              <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors">Productos</a>
              <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors">Categorías</a>
              <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors">Ofertas</a>
            </nav>
            <div class="flex items-center space-x-6">
              <button class="text-gray-600 hover:text-purple-600 transition-colors">
                <fa-icon [icon]="faSearch"></fa-icon>
              </button>
              <button class="text-gray-600 hover:text-purple-600 transition-colors">
                <fa-icon [icon]="faUser"></fa-icon>
              </button>
              <div class="relative">
                <button class="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-500 
                             transition-colors transform hover:scale-105">
                  <fa-icon [icon]="faShoppingCart"></fa-icon>
                </button>
                <span class="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full 
                           flex items-center justify-center text-sm font-bold">3</span>
              </div>
              <a routerLink="/" class="text-purple-600 hover:text-purple-800 transition-colors">Volver</a>
            </div>
          </div>
        </div>
      </header>

      <main class="pt-20">
        <app-shop-hero></app-shop-hero>
        <app-categories></app-categories>
        <app-featured-products></app-featured-products>
        <app-newsletter></app-newsletter>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">TECHSTORE</h3>
              <p class="text-gray-400">
                Tu tienda de tecnología de confianza. Productos de calidad al mejor precio.
              </p>
            </div>
            <div>
              <h4 class="font-bold mb-4">Enlaces Rápidos</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Productos</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Categorías</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Ofertas</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Ayuda</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Envíos</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Devoluciones</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Contacto</h4>
              <ul class="space-y-2 text-gray-400">
                <li>Santiago, Chile</li>
                <li>+56 9 1234 5678</li>
                <li>contacto</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 TechStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class ShopExampleComponent {
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faUser = faUser;
}