import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLeaf, faWineGlass, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6" data-aos="fade-right">
            <h2 class="text-4xl font-serif mb-6">Nuestra Historia</h2>
            <p class="text-gray-300">
              Desde 1985, La Cucina ha sido sinónimo de auténtica cocina italiana en Santiago. 
              Nuestro chef ejecutivo, con más de 30 años de experiencia, trae los sabores más 
              tradicionales de Italia a tu mesa.
            </p>
            
            <div class="grid grid-cols-3 gap-6 mt-8">
              <div class="text-center">
                <fa-icon [icon]="faLeaf" class="text-gold text-3xl mb-4"></fa-icon>
                <h3 class="font-bold mb-2">Ingredientes</h3>
                <p class="text-gray-400">Frescos y de temporada</p>
              </div>
              <div class="text-center">
                <fa-icon [icon]="faWineGlass" class="text-gold text-3xl mb-4"></fa-icon>
                <h3 class="font-bold mb-2">Vinos</h3>
                <p class="text-gray-400">Selección premium</p>
              </div>
              <div class="text-center">
                <fa-icon [icon]="faStar" class="text-gold text-3xl mb-4"></fa-icon>
                <h3 class="font-bold mb-2">Servicio</h3>
                <p class="text-gray-400">Excelencia garantizada</p>
              </div>
            </div>
          </div>
          
          <div class="relative" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" 
                 alt="Restaurant interior" 
                 class="rounded-lg shadow-xl">
            <div class="absolute -bottom-6 -right-6 bg-gold text-black p-6 rounded-lg">
              <p class="font-bold text-xl">35 años</p>
              <p>de tradición</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class RestaurantAboutComponent {
  faLeaf = faLeaf;
  faWineGlass = faWineGlass;
  faStar = faStar;
}