import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedMaterialModule} from "../shared/shared-material.module";
import { HeaderComponent } from '../core/layout/header/header.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)}
    ]
  }
];

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule
  ]
})
export class PagesModule {
}