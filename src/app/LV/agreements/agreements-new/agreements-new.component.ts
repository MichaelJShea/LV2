import { Component, OnInit, ViewChild } from '@angular/core';
import  * as moment from 'moment';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { AgreementService } from '../../services/agreement-service/agreement.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Agreement } from '../../models/agreements/agreement'


@Component({
  selector: 'app-agreements-new',
  templateUrl: './agreements-new.component.html',
  styleUrls: ['./agreements-new.component.scss']
})
export class AgreementsNewComponent implements OnInit {
  testAgreement: Agreement;
  agreement = {
    AgreementNumber: null,
    AltAgreementNumber: null,
    AgreementName: null,
    ShortDesc: null,
    FirstParty: null,
    SecondParty: null,
    AgreementClassCode: null,
    AgreementTypeCode: null,
    AgreementRightsTypeCode: null,
    AgreementStatusCode: null,
    AgreementForm: null,
    AgreementGroupFormCode: null,
    AgreementDate: null,
    EffectiveDate: null,
    Term: null,
    TermUnit: null,
    ExpireDate_Calc: null,
    ExtendedExpDate: null,
    DropReasonCode: null,
    DropDate: null,
    AssnReceivedDate: null,
    AssnReceivedComment: null,
    AssnDeliveredDate: null,
    AssnDeliveredComment: null,
    SourceDeedDate: null,
    LAGSignedDate: null,
    DueDiligenceDate: null,
    ActualCloseDate: null,
    AgreementLegal: null,
    GrossAcres_Calc: null,
    ReportedGrossAcres_Calc: null,
    NetAcres_Calc: null,
    GroupAcres_Calc: 0,
    CompanyAcres_Calc: 0,
    CompanyNRIAcres_Calc: 0,
    AcquisitionCost_Calc: 0,
    ProvisionSummary_Calc: 0,
    ProvisionCommentSummary_Calc: 0,
    NextObligationDate: null,
    AgreementXrefCount: null,
    WellXrefCount: null,
    Landman: null,
    TeamID: null,
    Lead: null,
    LeadSubStage: null,
    Owned: null,
    SrcDesc: null
  }
  selectOptions: any;
  TermUnits = [
    { description: 'Days', value: 'D'},
    { description: 'Months', value: 'M'},
    { description: 'Years', value: 'Y' }
  ]
  public DateMask = [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' - ', /\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/ ];

  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  GroupFormCodes = [
    {groupName: 'Base Provisions', groupCode: 'BASE'}
  ]
  AgreementClasses = [
    {className: 'Lease', classCode: 'LEAS'},
    {className: 'Contract', classCode: 'CON'}
  ]
@ViewChild('newAgreement') formValues;

  constructor(    
    private _agreementService: AgreementService,
    private toastyService: ToastyService,
    private router: Router) { }

  ngOnInit() {
    this.getAgreementSelectOptions();
  }

  createNewAgreement(agreement : NgForm){
    for(var field in agreement){
      console.log(field)
    }
    console.log("NEW AGREEMENT COMING IN HOT", agreement)
    let newAgreement = this._agreementService.createAgreement(agreement);
    newAgreement.subscribe(data => {
      console.log("New Agreement Made",data); 
      this.formValues.resetForm()
      this.router.navigate(['agreements', 'edit', `${data['AgreementID']}`])
    })
  }


  getAgreementSelectOptions(){
    let options = this._agreementService.getAgreementSearchOptions();
    options.subscribe( data => {
      this.selectOptions = data
      console.log('Select Options', data)
    })
  }


  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

}
