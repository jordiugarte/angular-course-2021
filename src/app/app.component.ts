import { Component, VERSION } from '@angular/core';
import { Routes } from '@angular/router';
import { JuradosComponent } from './jurados/jurados.component';
import { LugarComponent } from './lugar/lugar.component';
import { VotacionComponent } from './votacion/votacion.component';

export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
