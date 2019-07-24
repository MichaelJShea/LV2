import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsNewRoutingModule } from './units-new-routing.module';
import { UnitsNewComponent } from './units-new.component';

@NgModule({
  declarations: [UnitsNewComponent],
  imports: [
    CommonModule,
    UnitsNewRoutingModule
  ]
})
export class UnitsNewModule { }
