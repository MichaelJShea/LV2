import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsNewComponent } from './documents-new.component'
const routes: Routes = [
  {
    path: '',
    component: DocumentsNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsNewRoutingModule { }
