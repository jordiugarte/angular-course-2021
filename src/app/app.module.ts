import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Test3Component } from './test3/test3.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Test3Component,
    CustomComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
