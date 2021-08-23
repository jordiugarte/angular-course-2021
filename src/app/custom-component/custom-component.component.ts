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

  constructor() {}

  ngOnInit() {}

  onShowData() {
    this.onSendData.emit('general data ' + this.name + ' ' + this.lastName);
  }
}
