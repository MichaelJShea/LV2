import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsNewRoutingModule } from './documents-new-routing.module';
import { DocumentsNewComponent } from './documents-new.component';
import { DocumentsModule } from '../documents.module'
import { SharedModule } from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [DocumentsNewComponent],
  imports: [
    CommonModule,
    DocumentsNewRoutingModule,
    DocumentsModule,
    SharedModule
  ]
})
export class DocumentsNewModule { }
