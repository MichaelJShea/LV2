import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsSearchRoutingModule } from './documents-search-routing.module';
import { DocumentsSearchComponent } from './documents-search.component';

@NgModule({
  declarations: [DocumentsSearchComponent],
  imports: [
    CommonModule,
    DocumentsSearchRoutingModule
  ]
})
export class DocumentsSearchModule { }
