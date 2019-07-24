import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search',
        loadChildren: './documents-search/documents-search.module#DocumentsSearchModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './documents-edit/documents-edit.module#DocumentsEditModule'
      },
      {
        path: 'new',
        loadChildren: './documents-new/documents-new.module#DocumentsNewModule'
      }
     ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
