import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { CardComponent } from './card/card.component';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DateFormatPipe,
    HelloComponent,
    Ejercicio1Component,
    CardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
