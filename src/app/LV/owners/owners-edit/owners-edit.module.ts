import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersEditRoutingModule } from './owners-edit-routing.module';
import { OwnersEditComponent } from './owners-edit.component';

@NgModule({
  declarations: [OwnersEditComponent],
  imports: [
    CommonModule,
    OwnersEditRoutingModule
  ]
})
export class OwnersEditModule { }
