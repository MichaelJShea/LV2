import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreementsNewComponent } from './agreements-new.component'

const routes: Routes = [
  {
    path: '',
    component: AgreementsNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsNewRoutingModule { }
