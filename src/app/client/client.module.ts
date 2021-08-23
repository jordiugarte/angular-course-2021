import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';
import { SharedModule } from '../shared/shared.module';
import { ProviderModule } from '../provider/provider.module';

@NgModule({
  imports: [CommonModule, SharedModule, ProviderModule],
  declarations: [Client1Component, Client2Component],
  exports: [Client1Component, Client2Component]
})
export class ClientModule {}
