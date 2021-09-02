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
import { SharedModule } from './shared/shared.module';
import { BuyModule } from './pages/buy/buy.module';
import { CoreModule } from './core/core.module';

import { View1Component } from './view1/view1.component';
import {RouterModule, Routes} from "@angular/router";
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'view1', pathMatch: 'full'
  },
  {
    path: 'view1', component: View1Component
  },
  {
    path: 'view2', component: View2Component
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Module1Module,
    HomeModule,
    AdminModule,
    BuyModule,
    SharedModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes)
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
    Directive1Directive,
    Directive2Directive,
    View1Component,
    View2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
