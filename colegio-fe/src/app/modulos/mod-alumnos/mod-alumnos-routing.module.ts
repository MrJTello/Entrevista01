import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModAlumnosComponent } from './mod-alumnos.component';
import { ModAdlumnosRegistroComponent } from './mod-adlumnos-registro/mod-adlumnos-registro.component';
import { ModAdlumnosConsultaComponent } from './mod-adlumnos-consulta/mod-adlumnos-consulta.component';

const routes: Routes = [
  { path: '', component: ModAlumnosComponent }
  ,{ path: 'registro', component: ModAdlumnosRegistroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ModAlumnosRoutingModule { }
