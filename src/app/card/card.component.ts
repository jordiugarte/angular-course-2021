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
  @Output('update') update: EventEmitter<any> = new EventEmitter();

  @ViewChild('cardDiv') cardDiv: ElementRef;

  vaccined = false;
  baseDisease = false;
  adult = false;

  vaccinable = false;

  color = '';

  constructor() {}

  ngOnInit() {
    this.vaccined = this.item.vaccined === 1 ? true : false;
    this.baseDisease = this.item.disease;
    this.adult = this.item.age >= 18;
    this.color = this.vaccined ? 'green' : 'red';
    this.vaccinable = this.adult && !this.baseDisease && !this.vaccined;
  }

  vaccine() {
    this.item.vaccined = 1;
    this.ngOnInit();
    console.log('item', this.item);
    this.update.emit(this.item);
  }
}
