import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search',
        loadChildren: './owners-search/owners-search.module#OwnersSearchModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './owners-edit/owners-edit.module#OwnersEditModule'
      },
      {
        path: 'new',
        loadChildren: './owners-new/owners-new.module#OwnersNewModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
