import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { SharedModule } from '../../theme/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SharedModule
  ]
})
export class DocumentsModule { }
