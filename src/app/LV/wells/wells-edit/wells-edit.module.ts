import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellsEditRoutingModule } from './wells-edit-routing.module';
import { WellsEditComponent } from './wells-edit.component';

@NgModule({
  declarations: [WellsEditComponent],
  imports: [
    CommonModule,
    WellsEditRoutingModule
  ]
})
export class WellsEditModule { }
