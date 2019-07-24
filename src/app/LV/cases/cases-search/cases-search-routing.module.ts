import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesSearchComponent } from './cases-search.component'
const routes: Routes = [
  {
    path: '',
    component: CasesSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesSearchRoutingModule { }
