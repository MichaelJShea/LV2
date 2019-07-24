import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsSearchComponent } from './units-search.component'

const routes: Routes = [
  {
    path:'',
    component: UnitsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsSearchRoutingModule { }
