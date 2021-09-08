import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotacionComponent } from './votacion.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: VotacionComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [VotacionComponent]
})
export class VotacionModule {}
