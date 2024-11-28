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
    <div class="app-container">
      <header *ngIf="showHeader">
        <app-header></app-header>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .app-container {
      position: relative;
      width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
    }

    main {
      position: relative;
      width: 100%;
    }
  `]
})
export class App implements OnInit {
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHeader = event.urlAfterRedirects === '/';
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