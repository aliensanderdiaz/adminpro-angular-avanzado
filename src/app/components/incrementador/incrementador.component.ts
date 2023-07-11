import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input()
  btnClass: string = 'btn-primary';

  @Input('valor')
  progreso: number = 50;

  @Output('valor')
  valorSalida: EventEmitter<number> = new EventEmitter()

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`
  }

  cambiarValor( valor: number ) {
    const progresoTemp = this.progreso + valor
    if (progresoTemp > 100) {
      this.progreso = 100
      return this.valorSalida.emit(this.progreso)
    }
    if (progresoTemp < 0) {
      this.progreso = 0
      return this.valorSalida.emit(this.progreso)
    }
    this.progreso += valor
    return this.valorSalida.emit(this.progreso)
  }

  onChange( nuevoValor: number ) {
    this.progreso = nuevoValor
    if (this.progreso > 100) {
      this.progreso = 100
    }
    if (this.progreso < 0) {
      this.progreso = 0
    }

    console.log({ progreso: this.progreso})

    return this.valorSalida.emit(this.progreso)
  }
}
