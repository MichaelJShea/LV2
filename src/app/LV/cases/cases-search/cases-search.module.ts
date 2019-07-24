import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesSearchRoutingModule } from './cases-search-routing.module';
import { CasesSearchComponent } from './cases-search.component';

import { AgGridModule } from 'ag-grid-angular'

@NgModule({
  declarations: [CasesSearchComponent],
  imports: [
    CommonModule,
    CasesSearchRoutingModule,
    AgGridModule.withComponents()
  ]
})
export class CasesSearchModule { }
