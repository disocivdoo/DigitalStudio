import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ContactService } from '../../services/contact.service';
import { ContactFormData } from '../../shared/types/contact.types';
import { SOCIAL_LINKS } from '../../shared/constants/social-links';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  socialLinks = SOCIAL_LINKS;
  
  // Icons
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
  faWhatsapp = faWhatsapp;
  faClock = faClock;

  constructor(
    private fb: FormBuilder, 
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const formData: ContactFormData = this.contactForm.value;
      
      this.contactService.submitForm(formData).subscribe({
        next: () => {
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: () => {
          this.isSubmitting = false;
        },
      });
    }
  }
}