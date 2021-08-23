import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Layout1Component, Layout2Component],
  exports: [Layout1Component, Layout2Component]
})
export class LayoutModule {}
