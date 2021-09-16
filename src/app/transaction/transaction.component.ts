import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Api } from '../home/services/api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  @Input('item') item: any;
  @Output('update') update: EventEmitter<any> = new EventEmitter();

  @ViewChild('cardDiv') cardDiv: ElementRef;

  pow = false;
  clickeable = false;
  color = '';

  constructor(private service: Api) {}

  ngOnInit() {
    this.pow = this.item.mineType === 'PoW' ? true : false;
    this.clickeable = this.pow || (!this.pow && this.item.miner > 5);
    this.color = this.pow ? 'yellow' : 'green';
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
