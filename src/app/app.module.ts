import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JuradosComponent } from './jurados/jurados.component';
import { VotacionComponent } from './votacion/votacion.component';
import { LugarComponent } from './lugar/lugar.component';
import { AppRoutingModule } from './routing/routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [JuradosComponent, VotacionComponent, LugarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
