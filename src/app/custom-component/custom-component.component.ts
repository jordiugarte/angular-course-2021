import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {
  //  Tarea 7
  //  Crear dos inputs y un output
  @Input() name: string;
  @Input() lastName: string;
  @Output() onSendData = new EventEmitter(null);

  //  Tarea 8
  //  Crear Banan box
  myvar1 = 4;
  myvar2 = 5;

  constructor() {}

  ngOnInit() {}

  onShowData() {
    this.onSendData.emit('general data ' + this.name + ' ' + this.lastName);
  }

  test0(event) {
    console.log('event click:', event);
    console.log('SUMA: ', this.myvar1 + this.myvar2);
  }

  test1(event) {
    console.log('event blur:', event);
  }

  test3(event) {
    console.log('event double click:', event);
  }
}
