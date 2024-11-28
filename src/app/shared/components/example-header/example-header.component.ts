import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-example-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class]="headerClass">
      <div class="container mx-auto px-4 py-6">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold" [class.text-white]="darkMode">{{title}}</h1>
          <a routerLink="/" [class]="linkClass">Volver al inicio</a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .text-gold {
      color: #D4AF37;
    }
  `]
})
export class ExampleHeaderComponent {
  @Input() title = '';
  @Input() darkMode = false;
  @Input() transparent = false;

  get headerClass(): string {
    return this.transparent 
      ? 'fixed w-full z-50 bg-opacity-50 backdrop-blur-sm' 
      : 'bg-white shadow-sm';
  }

  get linkClass(): string {
    return this.darkMode 
      ? 'text-gold hover:text-white transition-colors' 
      : 'text-gold hover:text-gray-600 transition-colors';
  }
}