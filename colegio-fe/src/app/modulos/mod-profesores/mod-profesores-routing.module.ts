import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModProfesoresComponent } from './mod-profesores.component';

const routes: Routes = [{ path: '', component: ModProfesoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModProfesoresRoutingModule { }
