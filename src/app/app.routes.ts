import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogExampleComponent } from './examples/blog-example/blog-example.component';
import { PhotographerExampleComponent } from './examples/photographer-example/photographer-example.component';
import { LandingExampleComponent } from './examples/landing-example/landing-example.component';
import { BarberExampleComponent } from './examples/barber-example/barber-example.component';
import { ShopExampleComponent } from './examples/shop-example/shop-example.component';
import { RestaurantExampleComponent } from './examples/restaurant-example';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'example/blog', component: BlogExampleComponent },
  { path: 'example/photographer', component: PhotographerExampleComponent },
  { path: 'example/landing', component: LandingExampleComponent },
  { path: 'example/barber', component: BarberExampleComponent },
  { path: 'example/shop', component: ShopExampleComponent },
  { path: 'example/restaurant', component: RestaurantExampleComponent },
];