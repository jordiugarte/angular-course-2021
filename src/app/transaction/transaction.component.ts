import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Api } from '../../home/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class TransactionComponent implements OnInit {
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
    var currentDoses = this.item.doses;
    switch (this.item.vaccineType) {
      case 'A':
        maxDoses = 1;
      case 'B':
        maxDoses = 2;
      case 'C':
        maxDoses = 3;
    }
    if (currentDoses >= maxDoses - 1) {
      this.item.vaccined = 1;
      this.service.delete(this.item.key).subscribe((s) => {
        this.service.vaccine(this.item).subscribe((s) => {
          this.update.emit(this.item);
        });
      });
    } else {
      this.item.doses++;
      this.service.addDose(this.item.key, this.item).subscribe((s) => {
        this.update.emit(this.item);
      });
    }
  }
}
