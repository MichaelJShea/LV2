import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreementsEditComponent  } from './agreements-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AgreementsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsEditRoutingModule { }
