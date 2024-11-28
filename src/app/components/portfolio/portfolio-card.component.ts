import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faEye, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <article class="group relative bg-white rounded-2xl shadow-lg overflow-hidden 
                    transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1"
             [attr.data-aos]="'fade-up'"
             [attr.data-aos-delay]="delay">
      <!-- Imagen y Overlay -->
      <div class="relative overflow-hidden aspect-[16/9]">
        <img [src]="image" [alt]="title" 
             class="w-full h-full object-cover transition-transform duration-700 
                    group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <p class="text-white/90 mb-4 line-clamp-3">{{description}}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span *ngFor="let tech of technologies" 
                    class="text-xs bg-white/20 text-white px-3 py-1 rounded-full 
                           backdrop-blur-sm">
                {{tech}}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Category Badge -->
        <div class="absolute top-4 left-4 flex items-center gap-2">
          <span class="bg-gold text-black px-4 py-1.5 rounded-full text-sm font-bold 
                       shadow-lg backdrop-blur-sm">
            {{category}}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
          {{title}}
        </h3>
        <p class="text-gray-600 mb-6">{{shortDescription}}</p>

        <!-- Action Buttons -->
        <div class="flex items-center gap-4">
          <a [routerLink]="link" 
             class="flex-1 inline-flex items-center justify-center gap-2 bg-black text-white 
                    px-6 py-3 rounded-xl font-medium hover:bg-gold transition-all 
                    duration-300 group/btn transform hover:scale-105">
            <fa-icon [icon]="faEye"></fa-icon>
            <span>Ver Demo</span>
            <fa-icon [icon]="faArrowRight" 
                    class="transform group-hover/btn:translate-x-1 transition-transform">
            </fa-icon>
          </a>
          <button class="w-12 h-12 flex items-center justify-center rounded-xl 
                         bg-gray-100 text-gray-600 hover:bg-gold hover:text-white 
                         transition-all duration-300 transform hover:scale-105">
            <fa-icon [icon]="faCode"></fa-icon>
          </button>
        </div>
      </div>

      <!-- Hover Indicator -->
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gold transform scale-x-0 
                  group-hover:scale-x-100 transition-transform duration-500">
      </div>
    </article>
  `,
  styles: [`
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class PortfolioCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() shortDescription = '';
  @Input() image = '';
  @Input() technologies: string[] = [];
  @Input() category = '';
  @Input() link = '';
  @Input() delay = 0;

  faArrowRight = faArrowRight;
  faEye = faEye;
  faCode = faCode;
}