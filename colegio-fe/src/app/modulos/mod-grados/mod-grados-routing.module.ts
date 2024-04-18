import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModGradosComponent } from './mod-grados.component';

const routes: Routes = [{ path: '', component: ModGradosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModGradosRoutingModule { }
