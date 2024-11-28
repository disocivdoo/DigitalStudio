import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent
  ],
  template: `
    <div class="relative overflow-x-hidden w-full">
      <header *ngIf="showHeader" class="relative z-50">
        <app-header></app-header>
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      overflow-x: hidden;
    }
  `]
})
export class App implements OnInit {
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Only show header on home page
      this.showHeader = event.urlAfterRedirects === '/';
      // Scroll to top on navigation
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }
}