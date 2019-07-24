import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesEditRoutingModule } from './cases-edit-routing.module';
import { CasesEditComponent } from './cases-edit.component';

@NgModule({
  declarations: [CasesEditComponent],
  imports: [
    CommonModule,
    CasesEditRoutingModule
  ]
})
export class CasesEditModule { }
