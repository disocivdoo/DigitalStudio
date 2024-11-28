import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-serif text-center mb-16" data-aos="fade-up">
            Reserva tu Mesa
          </h2>
          
          <!-- Formulario de reserva (visual, sin funcionalidad en el ejemplo) -->
          <form [formGroup]="reservationForm" (ngSubmit)="onSubmit()" 
                class="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2">Nombre</label>
                <input type="text" formControlName="name"
                       class="w-full bg-transparent border border-gray-800 px-4 py-3 rounded-lg
                              text-white focus:outline-none focus:border-gold transition-colors">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input type="email" formControlName="email"
                       class="w-full bg-transparent border border-gray-800 px-4 py-3 rounded-lg
                              text-white focus:outline-none focus:border-gold transition-colors">
              </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2">Fecha</label>
                <input type="date" formControlName="date"
                       class="w-full bg-transparent border border-gray-800 px-4 py-3 rounded-lg
                              text-white focus:outline-none focus:border-gold transition-colors">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Hora</label>
                <select formControlName="time"
                        class="w-full bg-transparent border border-gray-800 px-4 py-3 rounded-lg
                               text-white focus:outline-none focus:border-gold transition-colors">
                  <option value="">Seleccionar hora</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Personas</label>
                <select formControlName="guests"
                        class="w-full bg-transparent border border-gray-800 px-4 py-3 rounded-lg
                               text-white focus:outline-none focus:border-gold transition-colors">
                  <option value="">Número de personas</option>
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5">5 personas</option>
                  <option value="6">6 personas</option>
                </select>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Mensaje especial</label>
              <textarea formControlName="message" rows="4"
                        class="w-full bg-transparent border border-gray-800 px-4 py-3 rounded-lg
                               text-white focus:outline-none focus:border-gold transition-colors"></textarea>
            </div>
            
            <button type="submit" 
                    [disabled]="!reservationForm.valid"
                    class="w-full bg-gold text-black py-4 rounded-lg font-bold 
                           hover:bg-white transition-colors">
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class RestaurantReservationComponent {
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guests: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Formulario de reserva enviado:', this.reservationForm.value);
      // En un ejemplo real, aquí se enviaría la información al backend
      this.reservationForm.reset();
    }
  }
}