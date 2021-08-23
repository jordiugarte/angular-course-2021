import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('item') item: any;

  @ViewChild('cardDiv') cardDiv: ElementRef;

  vaccined = false;
  color = '';

  constructor() {}

  ngOnInit() {
    this.vaccined = this.item.vaccined === 1 ? true : false;
    this.color = this.vaccined ? 'green' : 'red';
  }

  vaccine() {
    this.item.vaccined = 1;
    this.ngOnInit();
    console.log('item', this.item);
  }
}
