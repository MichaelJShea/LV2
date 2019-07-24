import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbPopoverModule,
    NgbTooltipModule
  ]
})
export class CommentsModule { }
