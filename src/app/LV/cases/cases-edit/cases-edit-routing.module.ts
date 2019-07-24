import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesEditComponent } from './cases-edit.component'

const routes: Routes = [
  {
    path: '',
    component: CasesEditComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesEditRoutingModule { }
