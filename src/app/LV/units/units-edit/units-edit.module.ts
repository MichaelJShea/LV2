import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsEditRoutingModule } from './units-edit-routing.module';
import { UnitsEditComponent } from './units-edit.component';

@NgModule({
  declarations: [UnitsEditComponent],
  imports: [
    CommonModule,
    UnitsEditRoutingModule
  ]
})
export class UnitsEditModule { }
