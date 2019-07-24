import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersNewRoutingModule } from './owners-new-routing.module';
import { OwnersNewComponent } from './owners-new.component';

@NgModule({
  declarations: [OwnersNewComponent],
  imports: [
    CommonModule,
    OwnersNewRoutingModule
  ]
})
export class OwnersNewModule { }
