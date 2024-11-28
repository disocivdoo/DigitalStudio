import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PortfolioCardComponent } from './portfolio-card.component';
import { Project } from './portfolio.types';
import { PROJECTS_DATA } from './portfolio.data';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, PortfolioCardComponent],
  template: `
    <section id="portfolio" class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-gold uppercase tracking-wider mb-4" data-aos="fade-up">
            Portafolio de Proyectos
          </p>
          <h2 class="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            Transformando Ideas en Experiencias Digitales
          </h2>
          <p class="text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Explora una selección de proyectos que demuestran mi capacidad para crear 
            soluciones web innovadoras y efectivas para diferentes industrias
          </p>
        </div>

        <!-- Categories -->
        <div class="flex justify-center gap-4 mb-16 flex-wrap" data-aos="fade-up" data-aos-delay="300">
          <button *ngFor="let cat of categories"
                  (click)="setActiveCategory(cat)"
                  [class.bg-gold]="activeCategory === cat"
                  [class.text-white]="activeCategory === cat"
                  class="px-6 py-3 rounded-xl border-2 border-gold text-gold 
                         hover:bg-gold hover:text-white transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
                         transform hover:scale-105">
            {{cat}}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid lg:grid-cols-2 gap-8 mb-16">
          <app-portfolio-card
            *ngFor="let project of filteredProjects; let i = index"
            [title]="project.title"
            [description]="project.description"
            [shortDescription]="project.shortDescription"
            [image]="project.image"
            [technologies]="project.technologies"
            [category]="project.category"
            [link]="project.link"
            [delay]="i * 100">
          </app-portfolio-card>
        </div>

        <!-- Call to Action -->
        <div class="text-center" data-aos="fade-up">
          <a (click)="scrollToContact($event)"
             class="inline-flex items-center gap-3 bg-gold text-black px-8 py-4 rounded-xl
                    hover:bg-black hover:text-gold border-2 border-gold transition-all 
                    duration-300 font-bold group transform hover:scale-105 shadow-lg cursor-pointer">
            <span>¿Tienes un proyecto en mente?</span>
            <fa-icon [icon]="faArrowRight" 
                    class="transform group-hover:translate-x-1 transition-transform">
            </fa-icon>
          </a>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  activeCategory = 'Todos';
  categories = ['Todos', 'Landing Page', 'E-commerce', 'Blog', 'Servicios'];
  faArrowRight = faArrowRight;
  projects: Project[] = PROJECTS_DATA;

  constructor(private scrollService: ScrollService) {}

  get filteredProjects() {
    return this.activeCategory === 'Todos'
      ? this.projects
      : this.projects.filter(project => project.category === this.activeCategory);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  scrollToContact(event: Event) {
    this.scrollService.scrollToSection('contact', event);
  }
}