import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoHeroComponent } from './components/photo-hero/photo-hero.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { PhotoServicesComponent } from './components/photo-services/photo-services.component';
import { PhotoContactComponent } from './components/photo-contact/photo-contact.component';

@Component({
  selector: 'app-photographer-example',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PhotoHeroComponent,
    PhotoGalleryComponent,
    PhotoServicesComponent,
    PhotoContactComponent
  ],
  template: `
    <div class="min-h-screen bg-black text-white">
      <!-- Header -->
      <header class="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-20">
            <h1 class="text-2xl font-light tracking-wider">JUAN PÉREZ</h1>
            <nav class="hidden md:flex space-x-8">
              <a class="text-gray-300 cursor-pointer">Inicio</a>
              <a class="text-gray-300 cursor-pointer">Galería</a>
              <a class="text-gray-300 cursor-pointer">Servicios</a>
              <a class="text-gray-300 cursor-pointer">Contacto</a>
            </nav>
            <div class="flex items-center space-x-4">
              <a routerLink="/" class="text-gray-300 hover:text-white transition-colors">Volver</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <app-photo-hero></app-photo-hero>
        <app-photo-gallery></app-photo-gallery>
        <app-photo-services></app-photo-services>
        <app-photo-contact></app-photo-contact>
      </main>

      <!-- Footer -->
      <footer class="bg-black py-8 border-t border-gray-800">
        <div class="container mx-auto px-4 text-center">
          <p class="text-gray-400">
            © 2024 Juan Pérez Photography. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  `
})
export class PhotographerExampleComponent {}