import { Component, OnInit } from '@angular/core';
import { Api } from './services/api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  transactions: any;
  wallets: any;
  ethQuantity: number = 0;
  btcQuantity: number = 0;
  showCreate = false;

  update(event: any) {
    this.showCreate = false;
    this.ngOnInit();
  }

  constructor(private service: Api, private matDialog: MatDialog) {
    this.transactions = [];
    this.wallets = [];
  }

  ngOnInit() {
    this.service.getTransactions().subscribe((s) => {
      let array = [];
      let index = 0;
      for (let key in s) {
        let item = Object.values(s)[index];
        array.push({
          key: key,
          date: item['date'],
          from: item['from'],
          to: item['to'],
          quantity: item['quantity'],
          moneyType: item['moneyType'],
          mineType: item['mineType'],
          miner: item['miner'],
        });
        index++;
      }
      this.transactions = array;
    });
    this.service.getWallets().subscribe((s) => {
      let array = [];
      let index = 0;
      for (let key in s) {
        let item = Object.values(s)[index];
        array.push({
          key: key,
          wallet: item['wallet'],
          name: item['name'],
          eth: item['eth'],
          btc: item['btc'],
        });
        index++;
        this.btcQuantity += Number(item['btc']);
        this.ethQuantity += Number(item['eth']);
      }
      this.wallets = array;
    });
  }

  getFromTransaction(transaction: any): string {
    var result = this.wallets.filter(
      (item) => item.wallet === transaction.from
    )[0];
    return result;
  }

  getToTransaction(transaction: any): string {
    var result = this.wallets.filter(
      (item) => item.wallet === transaction.to
    )[0];
    return result;
  }

  create() {
    this.showCreate = !this.showCreate;
  }
}
