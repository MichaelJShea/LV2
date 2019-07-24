import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellsSearchComponent } from './wells-search.component'

const routes: Routes = [
  {
    path: '',
    component: WellsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellsSearchRoutingModule { }
