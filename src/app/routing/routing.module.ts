import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuradosComponent } from '../jurados/jurados.component';
import { VotacionComponent } from '../votacion/votacion.component';
import { LugarComponent } from '../lugar/lugar.component';

const routes: Routes = [
  { path: 'jurados', component: JuradosComponent },
  { path: 'votacion', component: VotacionComponent },
  { path: 'lugar', component: LugarComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
