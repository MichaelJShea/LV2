import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsEditRoutingModule } from './units-edit-routing.module';
import { UnitsEditComponent } from './units-edit.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { MyDatePickerModule} from 'mydatepicker';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbModule, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule} from 'ng2-toasty';

@NgModule({
  declarations: [UnitsEditComponent],
  imports: [
    CommonModule,
    UnitsEditRoutingModule,
    SharedModule,
    MyDatePickerModule,
    NgbButtonsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgSelectModule,
    FormsModule,
    NgbTabsetModule,
    NgbModule,
    NgbAccordionModule,
    ToastyModule
  ]
})
export class UnitsEditModule { }
