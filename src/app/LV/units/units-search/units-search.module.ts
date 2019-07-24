import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsSearchRoutingModule } from './units-search-routing.module';
import { UnitsSearchComponent } from './units-search.component';

@NgModule({
  declarations: [UnitsSearchComponent],
  imports: [
    CommonModule,
    UnitsSearchRoutingModule
  ]
})
export class UnitsSearchModule { }
