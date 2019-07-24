import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnersNewComponent } from './owners-new.component'

const routes: Routes = [
  {
    path: '',
    component: OwnersNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersNewRoutingModule { }
