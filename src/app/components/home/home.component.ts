import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent
  ],
  template: `
    <main>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-contact></app-contact>
      <app-about></app-about>
    </main>
  `
})
export class HomeComponent {}