import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnersSearchComponent } from './owners-search.component'

const routes: Routes = [
  {
    path: '',
    component: OwnersSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersSearchRoutingModule { }
