import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search',
        loadChildren: './cases-search/cases-search.module#CasesSearchModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './cases-edit/cases-edit.module#CasesEditModule'
      },
      {
        path: 'new',
        loadChildren: './cases-new/cases-new.module#CasesNewModule'
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
