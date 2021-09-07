import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Api } from '../ejercicio1/services/api.service';

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

  constructor(private service: Api) {}

  ngOnInit() {
    this.vaccined = this.item.vaccined === 1 ? true : false;
    this.baseDisease = this.item.disease;
    this.adult = this.item.age >= 18;
    this.color = this.vaccined ? 'green' : 'red';
    this.vaccinable = this.adult && !this.baseDisease && !this.vaccined;
  }

  vaccine() {
    var maxDoses = 0;
    switch (this.item.vaccineType) {
      case 'A':
        maxDoses = 1;
      case 'B':
        maxDoses = 2;
      case 'C':
        maxDoses = 3;
    }
    if (this.item.doses < maxDoses - 1) {
      this.service
        .addDose(this.item.key, { doses: this.item.key })
        .subscribe(s => {
          this.update.emit(this.item);
        });
    } else {
      this.item.vaccined = 1;
      this.service.delete(this.item.key).subscribe(s => {
        this.service.vaccine(this.item).subscribe(s => {
          this.update.emit(this.item);
        });
      });
    }
  }
}
