import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesNewComponent } from './cases-new.component'

const routes: Routes = [
  {
    path: '',
    component: CasesNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesNewRoutingModule { }
