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
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  @Input('item') item: any;
  @Input('fromTransaction') fromWallet: any;
  @Input('toTransaction') toWallet: any;
  @Output('update') update: EventEmitter<any> = new EventEmitter();

  @ViewChild('cardDiv') cardDiv: ElementRef;

  pow = false;
  btc = false;
  clickeable = false;
  color = '';

  constructor(private service: Api, private matDialog: MatDialog) {}

  ngOnInit() {
    this.pow = this.item.mineType === 'PoW' ? true : false;
    this.btc = this.item.moneyType === 'btc';
    this.clickeable = this.pow || (!this.pow && this.item.miner > 5);
    this.color = this.pow ? 'yellow' : 'green';
  }

  mine() {
    var finalFromQuantity = this.fromWallet.btc - this.item.quantity;
    var finalToQuantity = this.toWallet + this.item.quantity;
    console.log('Incoming transaction', finalFromQuantity);
    if (this.btc) {
      this.service
        .changeQuantity(this.fromWallet.key, {
          btc: finalFromQuantity,
        })
        .subscribe((s) => {
          this.service
            .changeQuantity(this.toWallet.key, {
              btc: finalToQuantity,
            })
            .subscribe((s) => {
              this.service.delete(this.item.key).subscribe((s) => {
                this.update.emit(this.item);
              });
            });
        });
    }
  }

  edit() {
    this.matDialog.open(EditComponent);
  }
}
