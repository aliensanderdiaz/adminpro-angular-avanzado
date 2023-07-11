import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme2 = document.querySelector('#theme')
  public links = document.querySelectorAll('.selector')

  ngOnInit() {
    this.linkTheme2 = document.querySelector('#theme')
    this.links = document.querySelectorAll('.selector')
    this.checkCurrentTheme()
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme2?.setAttribute('href', url)

    localStorage.setItem('theme-admin', url)

    this.checkCurrentTheme()
  }

  checkCurrentTheme() {


    this.links.forEach(link => {
      link.classList.remove('working')

      const btnTheme = link.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`

      const theme = this.linkTheme2?.getAttribute('href')

      if (theme === btnThemeUrl) {
        link.classList.add('working')
      }
    })
  }
}
