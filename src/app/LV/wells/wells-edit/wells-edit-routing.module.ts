import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellsEditComponent } from './wells-edit.component';

const routes: Routes = [
  {
    path: '',
    component: WellsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellsEditRoutingModule { }
