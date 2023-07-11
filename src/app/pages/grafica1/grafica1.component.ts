import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Ventiladores', 'Licuadoras', 'Estufas']
  public data1: number[] = [100,80,20]

  public labels2: string[] = ['Enero', 'Febrero', 'Marzo']
  public data2: number[] = [500,30, 100]

  public labels3: string[] = ['Bancolombia', 'Davivienda', 'Av Villas']
  public data3: number[] = [1000,300,100]

  public labels4: string[] = ['Hogar', 'Varios', 'Caja Menor']
  public data4: number[] = [200,80,20]
}
