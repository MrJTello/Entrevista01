import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModProfesoresRoutingModule } from './mod-profesores-routing.module';
import { ModProfesoresComponent } from './mod-profesores.component';


@NgModule({
  declarations: [
    ModProfesoresComponent
  ],
  imports: [
    CommonModule,
    ModProfesoresRoutingModule
  ]
})
export class ModProfesoresModule { }
