import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { CardComponent } from './card/card.component';
import { DateFormatPipe } from './date-format.pipe';
import { Api } from './ejercicio1/services/api.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DateFormatPipe,
    HelloComponent,
    Ejercicio1Component,
    CardComponent
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule {}
