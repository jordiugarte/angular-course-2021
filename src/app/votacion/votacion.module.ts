import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotacionComponent } from './votacion.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: VotacionComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [VotacionComponent]
})
export class VotacionModule {}
