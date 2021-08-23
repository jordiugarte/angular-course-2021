import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test33',
  templateUrl: './test33.component.html',
  styleUrls: ['./test33.component.css']
})
export class Test33Component implements OnInit {
  myvar1 = '';
  myvar2 = '';

  //  Tarea 10
  //  Banana box y dos inputs

  constructor() {}

  ngOnInit() {}

  print(event) {
    console.log('event click:', this.myvar1 + ' ' + this.myvar2);
  }
}
