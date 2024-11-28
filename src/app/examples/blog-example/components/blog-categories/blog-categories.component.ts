import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCode, 
  faDatabase, 
  faMobile, 
  faGlobe,
  faLaptopCode,
  faServer
} from '@fortawesome/free-solid-svg-icons';

interface Category {
  name: string;
  icon: any;
  count: number;
  color: string;
}

@Component({
  selector: 'app-blog-categories',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Categorías
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div *ngFor="let category of categories; let i = index"
               class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div [class]="'w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center ' + category.color">
              <fa-icon [icon]="category.icon" class="text-white text-xl"></fa-icon>
            </div>
            <h3 class="font-bold mb-2">{{category.name}}</h3>
            <p class="text-gray-500 text-sm">{{category.count}} artículos</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BlogCategoriesComponent {
  faCode = faCode;
  faDatabase = faDatabase;
  faMobile = faMobile;
  faGlobe = faGlobe;
  faLaptopCode = faLaptopCode;
  faServer = faServer;

  categories: Category[] = [
    { 
      name: 'Frontend', 
      icon: faCode, 
      count: 25,
      color: 'bg-blue-500'
    },
    { 
      name: 'Backend', 
      icon: faServer, 
      count: 18,
      color: 'bg-green-500'
    },
    { 
      name: 'Bases de Datos', 
      icon: faDatabase, 
      count: 12,
      color: 'bg-yellow-500'
    },
    { 
      name: 'Mobile', 
      icon: faMobile, 
      count: 15,
      color: 'bg-purple-500'
    },
    { 
      name: 'DevOps', 
      icon: faGlobe, 
      count: 10,
      color: 'bg-red-500'
    },
    { 
      name: 'Desarrollo', 
      icon: faLaptopCode, 
      count: 20,
      color: 'bg-indigo-500'
    }
  ];
}