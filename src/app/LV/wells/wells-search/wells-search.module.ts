import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellsSearchRoutingModule } from './wells-search-routing.module';
import { WellsSearchComponent } from './wells-search.component';

@NgModule({
  declarations: [WellsSearchComponent],
  imports: [
    CommonModule,
    WellsSearchRoutingModule
  ]
})
export class WellsSearchModule { }
