import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {
  //  Tarea 5
  //  Crear input en componente
  @Input('status') statusTest: string = 'working';

  constructor() {}
}
