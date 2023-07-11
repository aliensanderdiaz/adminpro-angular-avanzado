import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme')

  ngOnInit() {
    const url = localStorage.getItem('theme-admin') || './assets/css/colors/megna.css'
    console.log( {url} )
    this.linkTheme?.setAttribute('href', url)
  }
}
