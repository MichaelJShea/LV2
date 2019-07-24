import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'search',
        loadChildren: './wells-search/wells-search.module#WellsSearchModule'
      },
      {
        path: 'edit',
        loadChildren: './wells-edit/wells-edit.module#WellsEditModule'
      },
      {
        path: 'new',
        loadChildren: './wells-new/wells-new.module#WellsNewModule'
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellsRoutingModule { }
