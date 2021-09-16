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
  @Input('fromTransaction') fromKey: any;
  @Input('toTransaction') toKey: any;
  @Output('update') update: EventEmitter<any> = new EventEmitter();

  @ViewChild('cardDiv') cardDiv: ElementRef;

  pow = false;
  btc = false;
  clickeable = false;
  color = '';

  constructor(private service: Api) {}

  ngOnInit() {
    this.pow = this.item.mineType === 'PoW' ? true : false;
    this.btc = this.item.moneyType === 'btc';
    this.clickeable = this.pow || (!this.pow && this.item.miner > 5);
    this.color = this.pow ? 'yellow' : 'green';
  }

  mine() {
    if (this.btc){
      this.service.changeQuantity(this.fromKey, {btc: })
    }
  }
}
