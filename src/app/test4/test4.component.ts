import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked {
  @Input() name;

  //  Tarea 9 Lifecycle

  constructor() {
    console.log('CONTRUCTOR');
  }

  ngOnChanges(changes: any) {
    console.log('ON CHANGES', changes);
  }

  ngOnInit() {
    console.log('ON INIT');
  }

  ngDoCheck() {
    console.log('DO CHECK');
  }

  ngAfterViewInit() {
    console.log('VIEW INIT');
  }

  ngAfterContentInit() {
    console.log('CONTENT INIT');
  }

  ngAfterContentChecked() {
    console.log('CONTENT CHECK');
  }

  ngAfterViewChecked() {
    console.log('VIEW CHECK');
  }

  ngOnDestroy() {
    console.log('ON DESTROY');
  }
}
