import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faRocket, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-example',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white">
      <header class="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm">
        <div class="container mx-auto px-4 py-6">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold text-gold">ProductoApp</h1>
            <div class="flex items-center space-x-8">
              <nav class="hidden md:flex space-x-6">
                <a href="#features" class="text-gray-300 hover:text-gold transition-colors">Características</a>
                <a href="#pricing" class="text-gray-300 hover:text-gold transition-colors">Precios</a>
                <a href="#testimonials" class="text-gray-300 hover:text-gold transition-colors">Testimonios</a>
              </nav>
              <a routerLink="/" class="text-gold hover:text-white transition-colors">Volver</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <!-- Hero Section -->
        <section class="pt-32 pb-20 px-4">
          <div class="container mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-5xl font-bold mb-6">
                  Potencia tu Productividad con
                  <span class="text-gold">ProductoApp</span>
                </h2>
                <p class="text-xl text-gray-300 mb-8">
                  Optimiza tu tiempo y alcanza tus metas con nuestra aplicación intuitiva
                  diseñada para maximizar tu eficiencia.
                </p>
                <div class="space-y-4 mb-8">
                  <div class="flex items-center space-x-3">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Gestión de tareas inteligente</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Sincronización en tiempo real</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Análisis de productividad</span>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <button class="bg-gold text-black px-8 py-3 rounded-full font-bold 
                               hover:bg-white transition-colors transform hover:scale-105">
                    Comenzar Ahora
                  </button>
                  <button class="border-2 border-gold text-gold px-8 py-3 rounded-full font-bold 
                               hover:bg-gold hover:text-black transition-all transform hover:scale-105">
                    Ver Demo
                  </button>
                </div>
              </div>
              <div class="relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                     alt="App" 
                     class="rounded-lg shadow-2xl">
                <div class="absolute -bottom-6 -right-6 bg-gold text-black p-6 rounded-lg transform rotate-3">
                  <p class="font-bold text-xl">¡50% OFF!</p>
                  <p>Tiempo limitado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 bg-black bg-opacity-50">
          <div class="container mx-auto px-4">
            <h3 class="text-3xl font-bold text-center mb-12">Características Principales</h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors">
                <div class="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <fa-icon [icon]="faRocket" class="text-gold text-xl"></fa-icon>
                </div>
                <h4 class="text-xl font-bold mb-4">Impulsa tu Productividad</h4>
                <p class="text-gray-400">
                  Herramientas avanzadas para gestionar tus tareas y proyectos de manera eficiente.
                </p>
              </div>
              <div class="p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors">
                <div class="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <fa-icon [icon]="faLightbulb" class="text-gold text-xl"></fa-icon>
                </div>
                <h4 class="text-xl font-bold mb-4">Ideas Inteligentes</h4>
                <p class="text-gray-400">
                  Sugerencias personalizadas basadas en tus patrones de trabajo y objetivos.
                </p>
              </div>
              <div class="p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors">
                <div class="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <fa-icon [icon]="faClock" class="text-gold text-xl"></fa-icon>
                </div>
                <h4 class="text-xl font-bold mb-4">Ahorra Tiempo</h4>
                <p class="text-gray-400">
                  Automatizaciones inteligentes que te ayudan a enfocarte en lo importante.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-20">
          <div class="container mx-auto px-4">
            <h3 class="text-3xl font-bold text-center mb-12">Planes Disponibles</h3>
            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gold transition-colors">
                <h4 class="text-xl font-bold mb-4">Básico</h4>
                <p class="text-3xl font-bold mb-6">$9.99<span class="text-sm text-gray-400">/mes</span></p>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Gestión básica de tareas</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>1 proyecto</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Soporte por email</span>
                  </li>
                </ul>
                <button class="w-full border-2 border-gold text-gold px-6 py-2 rounded-full
                             hover:bg-gold hover:text-black transition-colors">
                  Elegir Plan
                </button>
              </div>
              <div class="bg-gray-900 rounded-lg p-8 border-2 border-gold transform scale-105">
                <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-sm">
                  Más Popular
                </div>
                <h4 class="text-xl font-bold mb-4">Pro</h4>
                <p class="text-3xl font-bold mb-6">$19.99<span class="text-sm text-gray-400">/mes</span></p>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Todo lo del plan Básico</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Proyectos ilimitados</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Análisis avanzado</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
                <button class="w-full bg-gold text-black px-6 py-2 rounded-full
                             hover:bg-white transition-colors">
                  Elegir Plan
                </button>
              </div>
              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gold transition-colors">
                <h4 class="text-xl font-bold mb-4">Empresas</h4>
                <p class="text-3xl font-bold mb-6">$49.99<span class="text-sm text-gray-400">/mes</span></p>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Todo lo del plan Pro</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>API personalizada</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Soporte 24/7</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <fa-icon [icon]="faCheck" class="text-gold"></fa-icon>
                    <span>Capacitación incluida</span>
                  </li>
                </ul>
                <button class="w-full border-2 border-gold text-gold px-6 py-2 rounded-full
                             hover:bg-gold hover:text-black transition-colors">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .text-gold {
      color: #D4AF37;
    }
    .bg-gold {
      background-color: #D4AF37;
    }
    .border-gold {
      border-color: #D4AF37;
    }
  `]
})
export class LandingExampleComponent {
  faCheck = faCheck;
  faRocket = faRocket;
  faLightbulb = faLightbulb;
  faClock = faClock;
}