import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreementsSearchComponent } from './agreements-search.component';

const routes: Routes = [
  {
    path: '',
    component: AgreementsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsSearchRoutingModule { }
