import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsTestRoutingModule } from './agreements-test-routing.module';
import { AgreementsTestComponent } from './agreements-test.component';

@NgModule({
  declarations: [AgreementsTestComponent],
  imports: [
    CommonModule,
    AgreementsTestRoutingModule
  ]
})
export class AgreementsTestModule { }
