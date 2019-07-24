import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellsNewRoutingModule } from './wells-new-routing.module';
import { WellsNewComponent } from './wells-new.component';

@NgModule({
  declarations: [WellsNewComponent],
  imports: [
    CommonModule,
    WellsNewRoutingModule
  ]
})
export class WellsNewModule { }
