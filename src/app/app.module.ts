import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Test3Component } from './test3/test3.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { Test2Component } from './test2/test2.component';
import { Test4Component } from './test4/test4.component';
import { Test33Component } from './test33/test33.component';
import { DatalistComponent } from './datalist/datalist.component';
import { ObserverComponent } from './observer/observer.component';
import { Directive1Directive } from './directive1.directive';
import { Module1Module } from './module1/module1.module';
import { AdminModule } from './pages/admin/admin.module';
import { HomeModule } from './pages/home/home.module';
import { BuyModule } from './pages/buy/buy.module';

//  18/08/2021 task modules

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Module1Module,
    HomeModule,
    AdminModule,
    BuyModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    Test2Component,
    Test3Component,
    Test4Component,
    Test33Component,
    DatalistComponent,
    CustomComponentComponent,
    ObserverComponent,
    Directive1Directive
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
