import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {

  progreso: number = 50;

  get getPorcentaje() {
    return `${ this.progreso }%`
  }

  cambiarValor( valor: number ) {
    const progresoTemp = this.progreso + valor
    if (progresoTemp > 100) {
      return this.progreso = 100
    }
    if (progresoTemp < 0) {
      return this.progreso = 0
    }
    this.progreso += valor
    return
  }
}
