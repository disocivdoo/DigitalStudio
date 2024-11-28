import { Injectable } from '@angular/core';
import { smoothScrollTo } from '../shared/utils/scroll.utils';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToSection(elementId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    smoothScrollTo(elementId);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}