import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola Mundo')
    //   } else {
    //     reject('Algo salio mal')
    //   }
    // })

    // promesa.then(( data ) => {
    //   console.log({ mensaje: 'Hey Terminé', data })
    // }).catch((error) => {
    //   console.log({ mensaje: ':(', error })
    // })

    // console.log('Fin del Init')
    this.getUsuarios().then((usuarios) => {
      // console.log({ usuarios });
    });
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
