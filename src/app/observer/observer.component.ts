import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {
  color: string;

  tictock = of([1, 2, 3, 4, 5]);

  //  Tarea 12 Observer Of

  constructor() {
    // PERSON A
    this.tictock
      .pipe(
        map(s => s.join('-')),
        map(s => s + 'hola')
      )
      .subscribe(v => {
        console.log('PERSON A VIDEO', v);
      });
    // PERSON B
    this.tictock.pipe(filter((v: any) => v[0] % 2 === 1)).subscribe(v => {
      console.log('PERSON B VIDEO', v);
    });
    // PERSON C
    this.tictock.subscribe(v => {
      console.log('PERSON C VIDEO', v);
    });
  }

  onAddVideo() {}
}
