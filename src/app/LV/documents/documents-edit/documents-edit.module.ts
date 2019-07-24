import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsEditRoutingModule } from './documents-edit-routing.module';
import { DocumentsEditComponent } from './documents-edit.component';

@NgModule({
  declarations: [DocumentsEditComponent],
  imports: [
    CommonModule,
    DocumentsEditRoutingModule
  ]
})
export class DocumentsEditModule { }
