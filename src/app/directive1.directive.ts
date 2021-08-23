import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[directive1Test]'
})
export class Directive1Directive implements OnChanges {
  @Input() directive1Test: string = 'yellow';
  @Output() outputTest = new EventEmitter<any>(null);

  color: string;

  @HostListener('click') onClick() {
    this.setBackgroundColor(this.directive1Test);
  }

  @HostListener('mouseleave') onMouseleave() {
    this.setBackgroundColor('red');
    this.outputTest.emit('test myoutput');
  }

  constructor(private element: ElementRef) {
    console.log('AAAAAAAAAAAAAAAAAAA', this.element);
    this.setBackgroundColor(this.directive1Test);
    this.element.nativeElement.style.border = '10px green solid';
  }
  ngOnChanges(changes: any) {
    this.setBackgroundColor(changes.directive1Test.currrentValue);
  }

  setBackgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
