import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesNewRoutingModule } from './cases-new-routing.module';
import { CasesNewComponent } from './cases-new.component';

@NgModule({
  declarations: [CasesNewComponent],
  imports: [
    CommonModule,
    CasesNewRoutingModule
  ]
})
export class CasesNewModule { }
