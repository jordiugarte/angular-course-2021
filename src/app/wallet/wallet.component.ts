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
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  @Input('item') item: any;
  @Output('update') update: EventEmitter<any> = new EventEmitter();

  @ViewChild('cardDiv') cardDiv: ElementRef;

  big = false;
  small = false;
  color = '';

  constructor(private service: Api) {}

  ngOnInit() {
    this.big = this.item.eth + this.item.btc > 7;
    this.small = this.item.eth + this.item.btc < 1;
    this.color = this.big ? 'brown' : this.small ? 'gray' : 'white';
  }

  vaccine() {}
}
