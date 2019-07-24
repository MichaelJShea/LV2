import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsSearchRoutingModule } from './agreements-search-routing.module';
import { AgreementsSearchComponent } from './agreements-search.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
// import { SelectModule } from 'ng-select';
import { AmazingTimePickerModule} from 'amazing-time-picker';
import { NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule} from 'angular2-text-mask';
import { NgSelectModule} from '@ng-select/ng-select'
import { MyDatePickerModule} from 'mydatepicker';
import { MyDateRangePickerModule} from 'mydaterangepicker';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { AgGridModule } from 'ag-grid-angular';
import { ViewRendererComponent } from './view-renderer/view-renderer.component';
import { DatasheetRendererComponent } from './datasheet-renderer/datasheet-renderer.component';





@NgModule({
  declarations: [AgreementsSearchComponent, ViewRendererComponent, DatasheetRendererComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    AgreementsSearchRoutingModule,
    SharedModule,
    NgbDropdownModule,
    TagInputModule,
    AngularDualListBoxModule,
    AmazingTimePickerModule,
    NgbDatepickerModule,
    TextMaskModule,
    NgSelectModule,
    MyDatePickerModule,
    MyDateRangePickerModule,
    NgbButtonsModule,
    NgbTooltipModule,
    DataTablesModule,
    FormsModule,
    FontAwesomeModule,
    NgbPaginationModule,
    AgGridModule.withComponents([
      ViewRendererComponent,
      DatasheetRendererComponent
    ]),
    
  ],
  exports: [
    
  ]
})
export class AgreementsSearchModule { 
  constructor(){
    library.add(faCheckSquare, faSquare);
  }
}
