import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {
  //  Tarea 5
  //  Crear input en componente
  @Input('status') statusTest: string = 'working';

  //  Tarea 6
  //  Crear output en componente
  @Output('onSendData') sendData = new EventEmitter(null);

  constructor() {}

  onClick(event: any) {
    console.log('EVENT CLICK:', event);

    this.sendData.emit({
      name: 'ricardo',
      status: 'busy'
    });
  }
}
