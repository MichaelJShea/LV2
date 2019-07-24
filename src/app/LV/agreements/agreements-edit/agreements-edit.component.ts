import { Component, OnInit} from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AgreementService } from '../../services/agreement-service/agreement.service';
import { Params, Router, ActivatedRoute} from '@angular/router';
import  * as moment from 'moment';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';



@Component({
  selector: 'app-agreements-edit',
  templateUrl: './agreements-edit.component.html',
  styleUrls: ['./agreements-edit.component.scss']
})
export class AgreementsEditComponent implements OnInit {
  DTOAgreement: object = {
    AgreementNumber: 'AgreementNumber',
    AltAgreementNumber: 'AltAgreementNumber',
    AgreementName: 'AgreementName',
    ShortDesc: 'ShortDesc',
    FirstParty: 'FirstParty',
    SecondParty: 'SecondParty',
    AgreementClassCode: 'AgreementClassCode',
    AgreementTypeCode: 'AgreementTypeCode',
    AgreementRightsTypeCode: 'AgreementRightsTypeCode',
    AgreementStatusCode: 'AgreementStatusCode',
    AgreementForm: 'AgreementForm',
    AgreementGroupFormCode: 'AgreementGroupFormCode',
    AgreementDate: 'AgreementDate',
    EffectiveDate: 'EffectiveDate',
    Term: 'Term',
    TermUnit: 'TermUnit',
    ExpireDate_Calc: 'ExpireDate_Calc',
    ExtendedExpDate: 'ExtendedExpDate',
    DropReasonCode: 'DropReasonCode',
    DropDate: 'DropDate',
    AssnReceivedDate: 'AssnReceivedDate',
    AssnReceivedComment: 'AssnReceivedComment',
    AssnDeliveredDate: 'AssnDeliveredDate',
    AssnDeliveredComment: 'AssnDeliveredComment',
    SourceDeedDate: 'SourceDeedDate',
    LAGSignedDate: 'LAGSignedDate',
    DueDiligenceDate: 'DueDiligenceDate',
    ActualCloseDate: 'ActualCloseDate',
    AgreementLegal: 'AgreementLegal',
    GrossAcres_Calc: 'GrossAcres_Calc',
    ReportedGrossAcres_Calc: 'ReportedGrossAcres_Calc',
    NetAcres_Calc: 'NetAcres_Calc',
    GroupAcres_Calc: 'GroupAcres_Calc',
    CompanyAcres_Calc: 'CompanyAcres_Calc',
    CompanyNRIAcres_Calc: 'CompanyNRIAcres_Calc',
    AcquisitionCost_Calc: 'AcquisitionCost_Calc',
    ProvisionSummary_Calc: 'ProvisionSummary_Calc',
    ProvisionCommentSummary_Calc: 'ProvisionCommentSummary_Calc',
    NextObligationDate: 'NextObligationDate',
    AgreementXrefCount: 'AgreementXrefCount',
    WellXrefCount: 'WellXrefCount',
    Landman: 'Landman',
    TeamID: 'TeamID',
    Lead: 'Lead',
    LeadSubStage: 'LeadSubStage',
    Owned: 'Owned',
    SrcDesc: 'SrcDesc'

  }
  agreement: object = {
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
  agreementComments: any;
  agreementTracts: any;
  agreementProvisions: any;
  agreementXrefs: any;
  agreementBAs: any;
  agreementAquisitions: any;
  agreementImages: any;
  agreementId: number = null;
  agreementExists: boolean = false;
  dateDic = {
    AgreementDate: 'AgreementDate',
    EffectiveDate: 'EffectiveDate',
    NextObligationDate: 'NextObligationDate',
    AssnReceivedDate: 'AssnReceivedDate',
    AssnDeliveredDate: 'AssnDeliveredDate',
    ExpireDate_Calc: 'ExpireDate_Calc',
    DropDate: 'DropDate',
    ExtendedExpDate: 'ExtendedExpDate'
  }
  selectOptions: any;
  TermUnits = [
    { description: 'Days', value: 'D'},
    { description: 'Months', value: 'M'},
    { description: 'Years', value: 'Y' }
  ]

  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  constructor(
    private _agreementService: AgreementService,
    private _router: Router,
    private _route: ActivatedRoute,
    private toastyService: ToastyService
    ) { }

  ngOnInit() {
    this.DoesAgreementExisit();
    if(this.agreementExists){
      this.getAgreement(this.agreementId)
      console.log("AGREEMENT EXISTS!")
    }
    this.getAgreementSelectOptions();
  }

  getAgreement(id){
    let existingAgreement = this._agreementService.getAgreement(id);
    existingAgreement.subscribe(data => {
      for(var key in data){
        if(key == this.dateDic[key]){
          let date = moment(data[key]).format('YYYY-MM-DD');
          data[key] = date;
        }
      }
      this.agreement = data;
      console.log(this.agreement)
    })

  }

  createNewAgreement(agreement){
    let newAgreement = this._agreementService.createAgreement(agreement);
    newAgreement.subscribe(data => {
      console.log("New Agreement Made",data); 
    })
  }

  saveAgreement(agreement = this.agreement, agreementID = this.agreementId){

    if(agreementID){
      let body  = [
        {op: 'replace', path: '/AgreementStatusCode', value: agreement['AgreementStatusCode']},
        {op: 'replace', path: '/AltAgreementNumber', value: agreement['AltAgreementNumber']},
        {op: 'replace', path: '/AgreementTypeCode', value: agreement['AgreementTypeCode']},
        {op: 'replace', path: '/AgreementRightsTypeCode', value: agreement['AgreementRightsTypeCode']},
        {op: 'replace', path: '/AgreementGroupFormCode', value: agreement['AgreementGroupFormCode']},
        {op: 'replace', path: '/FirstParty', value: agreement['FirstParty']},
        {op: 'replace', path: '/SecondParty', value: agreement['SecondParty']},
        {op: 'replace', path: '/AgreementDate', value: agreement['AgreementDate']},
        {op: 'replace', path: '/EffectiveDate', value: agreement['EffectiveDate']},
        {op: 'replace', path: '/AssnReceivedDate', value: agreement['AssnReceivedDate']},
        {op: 'replace', path: '/AssnDeliveredDate', value: agreement['AssnDeliveredDate']},
        {op: 'replace', path: '/Term', value: agreement['Term']},
        {op: 'replace', path: '/TermUnit', value: agreement['TermUnit']},
        {op: 'replace', path: '/DropDate',value: agreement['DropDate']},
        {op: 'replace', path: '/AssnReceivedComment', value: agreement['AssnReceivedComment']},
        {op: 'replace', path: '/AssnDeliveredComment',value: agreement['AssnDeliveredComment']},
        {op: 'replace', path: '/AgreementLegal', value: agreement['AgreementLegal']},
  
      ]
  
      let update = this._agreementService.updateAgreement(body, agreementID);
      update.subscribe(data => {
        console.log(data);
        this.getAgreement(agreementID);
      })
    }
    else{
      let newAgreement = this._agreementService.createAgreement(agreement);(
      newAgreement.subscribe(data => {
        console.log('New Agreement',data)
      })
    )}
      
  }

  DoesAgreementExisit(){
    this._route.params.subscribe((params:Params)=>{
      if(params['id']){
        this.agreementExists = true;
        this.agreementId = params['id'];
      }
    })
  }

  getAgreementSelectOptions(){
    let options = this._agreementService.getAgreementSearchOptions();
    options.subscribe( data => {
      this.selectOptions = data
      console.log('Select Options', data)
    })
  }

  getAgreementComments(agreementId){
    let comments = this._agreementService.getAgreementComments(agreementId);
    comments.subscribe(comments => {
      console.log("COMMENTS", comments);
      this.agreementComments = comments
    })
  }

  getAgreementTracts(agreementId){
    let tracts = this._agreementService.getAgreementTracts(agreementId)
    tracts.subscribe(tracts => {
      console.log("TRACTS", tracts)
      this.agreementTracts = tracts;
    })
  }

  getAgreementProvisions(agreementId){
    
  }

  getAgreementXrefs(agreementId){

  }


  getAgreementBAs(agreementId){

  }

  getAgreementAquisitions(agreementId){

  }

  getAgreementImages(){

  }

  showCommentBox(){
    let commnentBox = `<div class="form-group col-8"><label for="comment"></label><textarea class="form-control" rows="5"></textarea></div>`
    let newCommentBox = <HTMLElement>document.getElementById('newCommentBox');
    newCommentBox.innerHTML = commnentBox
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
