import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const url =
      localStorage.getItem('theme-admin') || './assets/css/colors/megna.css';
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);

    localStorage.setItem('theme-admin', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach((link) => {
      link.classList.remove('working');

      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      const theme = this.linkTheme?.getAttribute('href');

      if (theme === btnThemeUrl) {
        link.classList.add('working');
      }
    });
  }
}
