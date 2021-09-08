import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { JuradosComponent } from './jurados.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: JuradosComponent }];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [JuradosComponent]
})
export class JuradosModule {}
