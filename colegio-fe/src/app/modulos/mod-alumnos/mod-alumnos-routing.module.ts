import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModAlumnosComponent } from './mod-alumnos.component';

const routes: Routes = [{ path: '', component: ModAlumnosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModAlumnosRoutingModule { }
