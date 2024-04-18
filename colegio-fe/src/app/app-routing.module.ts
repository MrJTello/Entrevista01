import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'alumnos', loadChildren: () => import('./modulos/mod-alumnos/mod-alumnos.module').then(m => m.ModAlumnosModule) }, 
  { path: 'grados', loadChildren: () => import('./modulos/mod-grados/mod-grados.module').then(m => m.ModGradosModule) },
  { path: 'profesores', loadChildren: () => import('./modulos/mod-profesores/mod-profesores.module').then(m => m.ModProfesoresModule) }, 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
