import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
//  mostrar una lista de personas dinámicamente con *ngFor
//  mediante un componente ingresando name y lastName


  info = [
    { name: 'juan', lastName: 'gutierrez' },
    { name: 'maria', lastName: 'quiroz' },
    { name: 'marco', lastName: 'paredes' },
    { name: 'pedro', lastName: 'mamani' }
  ];

  constructor() {}

  ngOnInit() {}
}
