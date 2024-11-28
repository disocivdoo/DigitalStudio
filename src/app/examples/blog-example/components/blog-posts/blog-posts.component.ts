import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faUser, faTag } from '@fortawesome/free-solid-svg-icons';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

@Component({
  selector: 'app-blog-posts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Últimos Artículos
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article *ngFor="let post of posts; let i = index"
                  class="bg-white rounded-lg shadow-lg overflow-hidden"
                  [attr.data-aos]="'fade-up'"
                  [attr.data-aos-delay]="i * 100">
            <img [src]="post.image" [alt]="post.title"
                 class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span class="flex items-center">
                  <fa-icon [icon]="faUser" class="mr-2"></fa-icon>
                  {{post.author}}
                </span>
                <span class="mx-2">•</span>
                <span class="flex items-center">
                  <fa-icon [icon]="faClock" class="mr-2"></fa-icon>
                  {{post.readTime}}
                </span>
              </div>
              <h3 class="text-xl font-bold mb-2 hover:text-indigo-600 transition-colors">
                {{post.title}}
              </h3>
              <p class="text-gray-600 mb-4">{{post.excerpt}}</p>
              <div class="flex items-center justify-between">
                <span class="flex items-center text-sm text-gray-500">
                  <fa-icon [icon]="faTag" class="mr-2"></fa-icon>
                  {{post.category}}
                </span>
                <span class="text-sm text-gray-500">{{post.date}}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
})
export class BlogPostsComponent {
  faUser = faUser;
  faClock = faClock;
  faTag = faTag;

  posts: BlogPost[] = [
    {
      title: 'Introducción a Angular 17',
      excerpt: 'Descubre las nuevas características y mejoras en la última versión de Angular.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      author: 'Juan Pérez',
      date: '10 Feb 2024',
      category: 'Angular',
      readTime: '5 min'
    },
    {
      title: 'Mejores Prácticas en TypeScript',
      excerpt: 'Aprende a escribir código TypeScript más limpio y mantenible.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
      author: 'María García',
      date: '8 Feb 2024',
      category: 'TypeScript',
      readTime: '7 min'
    },
    {
      title: 'Optimización de Rendimiento Web',
      excerpt: 'Técnicas y estrategias para mejorar el rendimiento de tu sitio web.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      author: 'Carlos Ruiz',
      date: '5 Feb 2024',
      category: 'Rendimiento',
      readTime: '6 min'
    }
  ];
}