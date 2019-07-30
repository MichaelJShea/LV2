import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsEditRoutingModule } from './agreements-edit-routing.module';
import { AgreementsEditComponent } from './agreements-edit.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { MyDatePickerModule} from 'mydatepicker';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbModule, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule} from 'ng2-toasty';

@NgModule({
  declarations: [AgreementsEditComponent  ],
  imports: [
    CommonModule,
    AgreementsEditRoutingModule,
    SharedModule,
    MyDatePickerModule,
    NgbButtonsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    NgbTabsetModule,
    ToastyModule,
    NgbModule,
    NgbAccordionModule
  ]
})
export class AgreementsEditModule { }
