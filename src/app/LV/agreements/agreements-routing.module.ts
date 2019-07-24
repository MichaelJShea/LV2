import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search',
        loadChildren: './agreements-search/agreements-search.module#AgreementsSearchModule'
      },
      {
        path: 'new',
        loadChildren: './agreements-new/agreements-new.module#AgreementsNewModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './agreements-edit/agreements-edit.module#AgreementsEditModule'
      }
    ]
    
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsRoutingModule { }
