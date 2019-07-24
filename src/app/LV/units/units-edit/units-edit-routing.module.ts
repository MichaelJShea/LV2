import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsEditComponent } from './units-edit.component'

const routes: Routes = [
  {
    path: '',
    component: UnitsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsEditRoutingModule { }
