import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellsNewComponent } from './wells-new.component'

const routes: Routes = [
  {
    path: '',
    component: WellsNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellsNewRoutingModule { }
