import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnersEditComponent } from './owners-edit.component'

const routes: Routes = [
  {
    path: '',
    component: OwnersEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersEditRoutingModule { }
