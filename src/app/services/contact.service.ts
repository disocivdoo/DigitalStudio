import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactFormData } from '../shared/types/contact.types';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  submitForm(formData: ContactFormData): Observable<boolean> {
    // Simulate API call
    console.log('Form submitted:', formData);
    return of(true);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}