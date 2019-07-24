import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { AnimationModalComponent } from './animation-modal/animation-modal.component';
import {TagInputModule} from 'ngx-chips';
import { NgSelectModule, NgSelectComponent } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    TagInputModule,
    NgSelectModule
  ],
  declarations: [UiModalComponent, AnimationModalComponent],
  exports: [UiModalComponent, AnimationModalComponent, NgSelectComponent]
})
export class ModalModule { }
