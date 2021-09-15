import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {LayoutModule} from "../../core/layout/layout.module";
import {SharedMaterialModule} from "../../shared/shared-material.module";
import { PublicationService } from 'src/app/shared/services/publications.service';

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    SharedMaterialModule
  ],
  providers: [
    PublicationService
  ]
})

export class HomeModule {
}