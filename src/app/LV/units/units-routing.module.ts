import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'search',
        loadChildren: './units-search/units-search.module#UnitsSearchModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './units-edit/units-edit.module#UnitsEditModule'
      },
      {
        path: 'new',
        loadChildren: './units-new/units-new.module#UnitsNewModule'
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule { }
