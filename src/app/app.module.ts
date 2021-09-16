import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { DateFormatPipe } from './date-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Api } from './home/services/api.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    DateFormatPipe,
    HomeComponent,
    TransactionComponent,
    WalletComponent,
    EditComponent,
  ],
  providers: [Api],
  bootstrap: [AppComponent],
})
export class AppModule {}
