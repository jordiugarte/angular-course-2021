import { Routes, RouterModule } from '@angular/router';

import { LugarComponent } from '../lugar/lugar.component';

const routes: Routes = [
  { path: '', redirectTo: 'jurados', pathMatch: 'full' },
  {
    path: 'jurados',
    loadChildren: () =>
      import('../jurados/jurados.module').then(m => m.JuradosModule)
  },
  {
    path: 'votacion',
    loadChildren: () =>
      import('../votacion/votacion.module').then(m => m.VotacionModule)
  },
  { path: 'lugar', component: LugarComponent }
];

export const RoutingModule = RouterModule.forRoot(routes);
