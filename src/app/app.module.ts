import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { View1Component } from './view1/view1.component';
import { SharedModule } from './shared/shared.module';
import { View3Component } from './view3/view3.component';
import { RouterModule, Routes } from '@angular/router';
import { View2Component } from './view2/view2.component';
import { View1sub1Component } from './view1/view1sub1/view1sub1.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view1',
    pathMatch: 'full'
  },
  {
    path: 'view1',
    component: View1Component,
    children: [
      {
        path: '',
        redirectTo: 'view1sub1',
        pathMatch: 'full'
      },
      {
        path: 'view1sub1',
        component: View1sub1Component
      },
      {
        path: 'view1sub2',
        component: View1sub2Component
      }
    ]
  },
  {
    path: 'view2/:id/sub/:id2',
    component: View2Component
  },
  {
    path: 'view3',
    loadChildren: () => import('./view3/view3.module').then(m => m.View3Module)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    Test2Component,
    Test3Component,
    View1Component,
    View2Component,
    View1sub1Component,
    View1sub2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
