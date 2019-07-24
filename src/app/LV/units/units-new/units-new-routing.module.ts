import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsNewComponent } from './units-new.component'

const routes: Routes = [
  {
    path: '',
    component: UnitsNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsNewRoutingModule { }
