import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersSearchRoutingModule } from './owners-search-routing.module';
import { OwnersSearchComponent } from './owners-search.component';

@NgModule({
  declarations: [OwnersSearchComponent],
  imports: [
    CommonModule,
    OwnersSearchRoutingModule
  ]
})
export class OwnersSearchModule { }
