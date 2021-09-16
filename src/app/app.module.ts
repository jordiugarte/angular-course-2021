import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TransactionComponent, WalletComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
