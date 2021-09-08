import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { LugarComponent } from './lugar/lugar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'jurados', pathMatch: 'full' },
  {
    path: 'jurados',
    loadChildren: () =>
      import('./jurados/jurados.module').then(m => m.JuradosModule)
  },
  {
    path: 'votacion',
    loadChildren: () =>
      import('./votacion/votacion.module').then(m => m.VotacionModule)
  },
  { path: 'lugar', component: LugarComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
