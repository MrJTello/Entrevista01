import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModAlumnosRoutingModule } from './mod-alumnos-routing.module';
import { ModAlumnosComponent } from './mod-alumnos.component';


@NgModule({
  declarations: [
    ModAlumnosComponent
  ],
  imports: [
    CommonModule,
    ModAlumnosRoutingModule
  ]
})
export class ModAlumnosModule { }
