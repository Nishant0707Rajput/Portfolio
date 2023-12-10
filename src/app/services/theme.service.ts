import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkMode = false; // Initial mode set to light

  toggleTheme() {
    this.darkMode = !this.darkMode;
    // Optionally, save the theme preference to local storage for persistence
    localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
  }

  setInitialTheme() {
    const savedMode = localStorage.getItem('darkMode');
    this.darkMode = savedMode === 'true';
  }
}
