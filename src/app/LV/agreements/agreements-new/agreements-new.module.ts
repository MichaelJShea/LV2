import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsNewRoutingModule } from './agreements-new-routing.module';
import { AgreementsNewComponent } from './agreements-new.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { MyDatePickerModule} from 'mydatepicker';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule} from 'ng2-toasty'
import { TextMaskModule} from 'angular2-text-mask';

@NgModule({
  declarations: [AgreementsNewComponent],
  imports: [
    CommonModule,
    AgreementsNewRoutingModule,
    SharedModule,
    MyDatePickerModule,
    NgbButtonsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    NgbTabsetModule,
    ToastyModule,
    TextMaskModule
  ]
})
export class AgreementsNewModule { }
