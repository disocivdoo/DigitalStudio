import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faLaptop, faHeadphones, faCamera, faGamepad, 
  faTablet, faDesktop, faPhone, faWifi 
} from '@fortawesome/free-solid-svg-icons';

interface Category {
  name: string;
  icon: any;
  count: number;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Categorías
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div *ngFor="let category of categories; let i = index"
               class="group bg-gray-50 rounded-2xl p-6 text-center cursor-pointer hover:bg-purple-600 
                      transition-all duration-300"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div class="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center
                      group-hover:bg-white transition-colors">
              <fa-icon [icon]="category.icon" 
                      class="text-2xl text-purple-600 group-hover:text-purple-600">
              </fa-icon>
            </div>
            <h3 class="text-lg font-bold mb-2 group-hover:text-white">{{category.name}}</h3>
            <p class="text-gray-500 group-hover:text-purple-200">{{category.count}} productos</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CategoriesComponent {
  faLaptop = faLaptop;
  faHeadphones = faHeadphones;
  faCamera = faCamera;
  faGamepad = faGamepad;
  faTablet = faTablet;
  faDesktop = faDesktop;
  faPhone = faPhone;
  faWifi = faWifi;

  categories: Category[] = [
    { name: 'Laptops', icon: faLaptop, count: 24 },
    { name: 'Audio', icon: faHeadphones, count: 18 },
    { name: 'Cámaras', icon: faCamera, count: 12 },
    { name: 'Gaming', icon: faGamepad, count: 32 },
    { name: 'Tablets', icon: faTablet, count: 16 },
    { name: 'Monitores', icon: faDesktop, count: 20 },
    { name: 'Smartphones', icon: faPhone, count: 45 },
    { name: 'Accesorios', icon: faWifi, count: 67 }
  ];
}