import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  myStatus = 'my status';

  sw = true;
  color: string;

  @ViewChild('myDiv1') myDiv1: ElementRef;
  @ViewChild('myDiv2') myDiv2: ElementRef;
  @ViewChild('myCompRicardo') myCompRicardo: any;

  constructor() {
    //  Tarea 1
    //  Convertir un array y sumar los números pares
    const arr1 = { 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a' };
    const arr1Even = Object.keys(arr1)
      .map(n => parseInt(n))
      .reduce((acc, value) => {
        if (value % 2 === 0) {
          acc += value;
        }
        return acc;
      }, 0);
    console.log('Ejercicio 1: ', arr1Even);

    //  Filtrar los números impares y mostrarlos como cadena
    const arr2 = [1, 2, 3, 4, 5, 6];
    console.log('Ejercicio 2: ', arr2.filter(item => item % 2 === 1).join(','));
  }

  printData(event: any) {
    console.log('RICARDO COMP:', event);
    console.log('CHILD COMP SEND DATA: ', event);
  }

  onShowLocalVars() {
    console.log(this.myDiv1, this.myDiv2, this.myCompRicardo);

    this.myCompRicardo.onClickTest();

    this.myDiv2.nativeElement.value = 'ricardo';
  }
}
