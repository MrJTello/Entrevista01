import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModGradosRoutingModule } from './mod-grados-routing.module';
import { ModGradosComponent } from './mod-grados.component';


@NgModule({
  declarations: [
    ModGradosComponent
  ],
  imports: [
    CommonModule,
    ModGradosRoutingModule
  ]
})
export class ModGradosModule { }
