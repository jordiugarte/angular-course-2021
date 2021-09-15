import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedMaterialModule} from "../shared/shared-material.module";
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent}
]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedMaterialModule
  ]
})

export class LoginModule {
}