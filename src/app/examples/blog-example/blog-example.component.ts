import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogHeroComponent } from './components/blog-hero/blog-hero.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogCategoriesComponent } from './components/blog-categories/blog-categories.component';
import { BlogNewsletterComponent } from './components/blog-newsletter/blog-newsletter.component';

@Component({
  selector: 'app-blog-example',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BlogHeroComponent,
    BlogPostsComponent,
    BlogCategoriesComponent,
    BlogNewsletterComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="fixed w-full z-50 bg-white shadow-sm">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-20">
            <h1 class="text-2xl font-bold">
              DEV<span class="text-indigo-600">BLOG</span>
            </h1>
            <nav class="hidden md:flex space-x-8">
              <a class="text-gray-600 cursor-pointer">Inicio</a>
              <a class="text-gray-600 cursor-pointer">Artículos</a>
              <a class="text-gray-600 cursor-pointer">Categorías</a>
              <a class="text-gray-600 cursor-pointer">Sobre Mí</a>
            </nav>
            <div class="flex items-center space-x-4">
              <a routerLink="/" class="text-indigo-600 hover:text-indigo-800 transition-colors">Volver</a>
            </div>
          </div>
        </div>
      </header>

      <main class="pt-20">
        <app-blog-hero></app-blog-hero>
        <app-blog-categories></app-blog-categories>
        <app-blog-posts></app-blog-posts>
        <app-blog-newsletter></app-blog-newsletter>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">DEVBLOG</h3>
              <p class="text-gray-400">
                Compartiendo conocimiento y experiencias en el mundo del desarrollo web.
              </p>
            </div>
            <div>
              <h4 class="font-bold mb-4">Enlaces</h4>
              <ul class="space-y-2">
                <li><a class="text-gray-400 cursor-pointer">Inicio</a></li>
                <li><a class="text-gray-400 cursor-pointer">Artículos</a></li>
                <li><a class="text-gray-400 cursor-pointer">Categorías</a></li>
                <li><a class="text-gray-400 cursor-pointer">Sobre Mí</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Contacto</h4>
              <ul class="space-y-2 text-gray-400">
                <li>contacto&#64;devblog.com</li>
                <li>Santiago, Chile</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 DevBlog. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class BlogExampleComponent {}