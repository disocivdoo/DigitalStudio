import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

interface BarberTeam {
  name: string;
  position: string;
  image: string;
  instagram: string;
  facebook: string;
}

@Component({
  selector: 'app-barber-team',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 text-white" data-aos="fade-up">
          Nuestro Equipo
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let member of team; let i = index"
               class="text-center group"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div class="relative mb-6 overflow-hidden rounded-lg">
              <img [src]="member.image" [alt]="member.name"
                   class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a [href]="member.instagram" target="_blank" 
                   class="w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center 
                          hover:bg-white transition-colors">
                  <fa-icon [icon]="faInstagram"></fa-icon>
                </a>
                <a [href]="member.facebook" target="_blank"
                   class="w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center 
                          hover:bg-white transition-colors">
                  <fa-icon [icon]="faFacebookF"></fa-icon>
                </a>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{member.name}}</h3>
            <p class="text-gold">{{member.position}}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BarberTeamComponent {
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;

  team: BarberTeam[] = [
    {
      name: 'Carlos Rodríguez',
      position: 'Master Barber',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      instagram: '#',
      facebook: '#'
    },
    {
      name: 'Daniel Torres',
      position: 'Senior Barber',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
      instagram: '#',
      facebook: '#'
    },
    {
      name: 'Miguel Ángel',
      position: 'Style Expert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      instagram: '#',
      facebook: '#'
    }
  ];
}