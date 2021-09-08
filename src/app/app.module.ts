import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JuradosComponent } from './jurados/jurados.component';
import { VotacionComponent } from './votacion/votacion.component';
import { LugarComponent } from './lugar/lugar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view1',
    pathMatch: 'full'
  },
  {
    path: 'jurados',
    component: JuradosComponent
  },
  {
    path: 'votacion',
    component: VotacionComponent
  },
  {
    path: 'lugar',
    component: LugarComponent
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [
    HelloComponent,
    JuradosComponent,
    VotacionComponent,
    LugarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
