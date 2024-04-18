import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModAlumnosRoutingModule } from './mod-alumnos-routing.module';
import { ModAlumnosComponent } from './mod-alumnos.component';
import { ModAdlumnosConsultaComponent } from './mod-adlumnos-consulta/mod-adlumnos-consulta.component';
import { ModAdlumnosRegistroComponent } from './mod-adlumnos-registro/mod-adlumnos-registro.component';

import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 

@NgModule({
  declarations: [
    ModAlumnosComponent,
    ModAdlumnosConsultaComponent,
    ModAdlumnosRegistroComponent,
  ],
  imports: [
    CommonModule,
    ModAlumnosRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule
  ]
})
export class ModAlumnosModule { }
