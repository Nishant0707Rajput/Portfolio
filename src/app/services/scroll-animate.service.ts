import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimateService {
  private observer: IntersectionObserver | null = null;

  constructor(private ngZone: NgZone) {}

  initScrollObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: reveal all immediately if IntersectionObserver not supported
      this.revealAllFallback();
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      // Small timeout to ensure DOM has rendered
      setTimeout(() => {
        if (window.innerWidth <= 768) {
          this.revealAllFallback();
          return;
        }

        const options: IntersectionObserverInit = {
          root: null,
          rootMargin: '0px 0px 100px 0px',
          threshold: 0.02
        };

        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              // Unobserve once revealed for performance
              this.observer?.unobserve(entry.target);
            }
          });
        }, options);

        this.observeElements();
      }, 100);
    });
  }

  public refresh(): void {
    this.observeElements();
  }

  private observeElements(): void {
    const targets = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
    targets.forEach((el) => {
      this.observer?.observe(el);
    });
  }

  private revealAllFallback(): void {
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((el) => el.classList.add('is-revealed'));
  }
}
