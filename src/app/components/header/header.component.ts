import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class]="headerClass">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-gold">
            <span class="text-white">Digital</span>Studio
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="toggleMenu()" 
                    class="text-white focus:outline-none"
                    aria-label="Toggle menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      [attr.d]="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"/>
              </svg>
            </button>
          </div>

          <!-- Desktop menu -->
          <ul class="hidden md:flex space-x-8">
            <li><a (click)="onSectionClick('home', $event)" class="nav-link">Inicio</a></li>
            <li><a (click)="onSectionClick('services', $event)" class="nav-link">Servicios</a></li>
            <li><a (click)="onSectionClick('portfolio', $event)" class="nav-link">Portafolio</a></li>
            <li><a (click)="onSectionClick('about', $event)" class="nav-link">Sobre Nosotros</a></li>
            <li><a (click)="onSectionClick('contact', $event)" class="nav-link">Contacto</a></li>
          </ul>
        </div>

        <!-- Mobile menu panel -->
        <div class="md:hidden" [class.hidden]="!isMenuOpen">
          <ul class="pt-4 space-y-4">
            <li><a (click)="onSectionClick('home', $event)" class="nav-link block">Inicio</a></li>
            <li><a (click)="onSectionClick('services', $event)" class="nav-link block">Servicios</a></li>
            <li><a (click)="onSectionClick('portfolio', $event)" class="nav-link block">Portafolio</a></li>
            <li><a (click)="onSectionClick('about', $event)" class="nav-link block">Sobre Nosotros</a></li>
            <li><a (click)="onSectionClick('contact', $event)" class="nav-link block">Contacto</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .nav-link {
      @apply text-white hover:text-gold transition-colors duration-300 cursor-pointer;
    }

    .header-scrolled {
      @apply fixed w-full bg-black shadow-lg transition-all duration-300 ease-in-out z-50;
      background-color: rgba(0, 0, 0, 0.9);
    }

    .header-top {
      @apply fixed w-full transition-all duration-300 ease-in-out z-50;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;
  headerClass = 'header-top';

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.headerClass = 'header-scrolled';
    } else {
      this.headerClass = 'header-top';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSectionClick(elementId: string, event: Event) {
    this.scrollService.scrollToSection(elementId, event);
    this.isMenuOpen = false;
  }
}