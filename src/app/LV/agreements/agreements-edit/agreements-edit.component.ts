import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AgreementService } from '../../services/agreement-service/agreement.service';
import { Params, Router, ActivatedRoute} from '@angular/router';
import { ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import  * as moment from 'moment';

import { AgreementObject } from '../../models/agreements/agreement-object';
import { DateFormatterDictionary } from '../../models/date-formatter-dictionary';
// Child Components
import { CommentsComponent } from '../../../theme/shared/components/comments/comments.component'




@Component({
  selector: 'app-agreements-edit',
  templateUrl: './agreements-edit.component.html',
  styleUrls: ['./agreements-edit.component.scss']
})
export class AgreementsEditComponent implements OnInit, OnDestroy {
  @ViewChild(CommentsComponent) CommentsComp:CommentsComponent;
  private Agreement: AgreementObject;
  private PageLoaded: Boolean;
  private AgreementExists: boolean = false;
  private SelectOptions: any;
  private DateFormaterDictionary: DateFormatterDictionary;

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
 

  constructor(private _agreementService: AgreementService,private _router: Router, private _route: ActivatedRoute,private toastyService: ToastyService) {
    this.Agreement = new AgreementObject;
    this.PageLoaded = false;
    this.SelectOptions = [];
    this.DateFormaterDictionary = {
      AgreementDate: 'AgreementDate',
      EffectiveDate: 'EffectiveDate',
      NextObligationDate: 'NextObligationDate',
      AssnReceivedDate: 'AssnReceivedDate',
      AssnDeliveredDate: 'AssnDeliveredDate',
      ExpireDate_Calc: 'ExpireDate_Calc',
      DropDate: 'DropDate',
      ExtendedExpDate: 'ExtendedExpDate',
      SourceDeedDate: 'SourceDeedDate',
      LAGSignedDate: 'LAGSignedDate',
      DueDiligenceDate: 'DueDiligenceDate',
      ActualCloseDate: 'ActualCloseDate'
    };
  }

  ngOnInit() {
    this.getAgreement();
    // if(this.AgreementExists){
    //   this.getAgreement(this.AgreementId)
    //   console.log("AGREEMENT EXISTS!");
    //   this.getAgreementTracts(this.AgreementId);
    //   this.getAgreementSelectOptions();
    //   this.PageLoaded = true;
    // }
  }
  
// Does The Agreement Exisit? If So Get The Agreement
  getAgreement(){
    this._route.params
    .subscribe((params:Params)=>{
      if(params['id']){
        // Get Agreement
        this._agreementService.getAgreement(params['id'])
        .subscribe(res => {
          if(res.ok){
            console.log("GET AGREEMENT - RESPONSE:", res);
            this.formatDate(res.body);
            this.Agreement.Agreement = res.body;
            // Get Select Options 
            this._agreementService.getAgreementSearchOptions()
            .subscribe(data=>{
              this.SelectOptions = data;
            })
            // Get Agreement Tracts
            this._agreementService.getAgreementTracts(this.Agreement.Agreement.AgreementID)
            .subscribe(res => {
              if(res.ok){
                this.Agreement.AgreementTracts = res.body;
                console.log("AGREEMENT TRACTS:",this.Agreement.AgreementTracts);
              }
            })
            // Get Agreement Provisions
            this._agreementService.getAgreementProvisions(this.Agreement.Agreement.AgreementID)
            .subscribe(res => {
              if(res.ok){
                this.Agreement.AgreementProvisions = res.body;
                console.log("AGREEMENT PROVISIONS:", this.Agreement.AgreementProvisions);
              }
            })
            // Get Agreement Related Parties
            this._agreementService.getAgreementRelatedParties(this.Agreement.Agreement.AgreementID)
            .subscribe(res => {
              if(res.ok){
                this.Agreement.AgreementRelatedParties = res.body;
                console.log("AGREEMENT RELATED PARTIES:", this.Agreement.AgreementRelatedParties);
              }
            })
            // Get Agreement Comments
            this._agreementService.getAgreementComments(this.Agreement.Agreement.AgreementID)
            .subscribe(res => {
              if(res.ok){
                this.Agreement.AgreementComments = res.body;
                console.log("AGREEMENT COMMENTS:", this.Agreement.AgreementComments);
              }
            })
          }
          else{
            // redirect to not found page?
          }
        })
      }
    })
  }

  deleteAgreement(AgreementID: Number){
    this._agreementService.deleteAgreement(AgreementID);
    this.addToast({title:'Agreement Deleted!', msg:'Delete Was Successful', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'success'});
    this._router.navigate(['agreements/search'])
  }
//#endregion

//#region AGREEMENT COMMENTS
// // Get Agreement Comments
//   getAgreementComments(agreementId){
//     let comments = this._agreementService.getAgreementComments(agreementId);
//     comments.subscribe((comments: AgreementComment[]) => {
//       console.log("COMMENTS", comments);
//       this.AgreementComments = comments
//     })
//   }

// Delete Agreement Comments
  deleteAgreementComment(agreementId ,commentId){
    this._agreementService.deleteAgreementComment(agreementId, commentId); 
    // this.getAgreementComments(agreementId);
  }
//#endregion

//#region AGREEMENT TRACTS
// Get Agreement Tracts
  // getAgreementTracts(agreementId){
  //   let tracts = this._agreementService.getAgreementTracts(agreementId)
  //   tracts.subscribe((tracts: AgreementTract[]) => {
  //     this.AgreementTracts = tracts;
  //     console.log("TRACTS FROM SERVER", this.AgreementTracts);
  //   })
  // }

  // createNewAgreementTract(){
  //   let newTract = new AgreementTract;
  //   newTract.AgreementID = this.AgreementId;
  //   this.AgreementTracts.push(newTract);
  //   console.log("NEW", this.AgreementTracts);
  // }

  deleteAgreementTract(){
      
  }
//#endregion
  
//#region AGREEMENT PROVISIONS
getAgreementProvisions(agreementId){
    
  }

//#endregion

//#region AGREEMENT XREFS

  getAgreementXrefs(agreementId){

  }

//#endregion

//#region AGREEMENT BA'S
  getAgreementBAs(agreementId){

  }
//#endregion

//#region AGREEMENT AQUISITIONS
getAgreementAquisitions(agreementId){

  }
//#endregion
  
//#region AGREEMENT IMAGES
getAgreementImages(){

  }
//#endregion

//#region TOASTS
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
//#endregion

//#region SAVE METHOD
  // SaveEntireAgreement(){
  //   // UPDATE AGREEMENT
  //   console.log("****************SAVING ENTIRE AGREEMENT");
  //   console.log("UPDATING/CREATING NEW AGREEMENT TRACTS", this.AgreementTracts)
  //   for(var tract in this.AgreementTracts){
  //     var t  = this.AgreementTracts[tract];
  //     if(t.UnitID == null){
  //       t.UnitID = 1;
  //     }
  //   }
  //   var AgreementTracts = this._agreementService.updateAgreementTracts(this.Agreement.AgreementID, this.AgreementTracts);
  //   AgreementTracts.subscribe((data:AgreementTract[])=> {
  //     console.log("UPDATED AGREEMENT TRACTS", this.getAgreementTracts(this.Agreement.AgreementID));
  //   })
  // }
    //#endregion


    //#region DATE FORMATTER
  formatDate(data){
    for(var key in data){
      if(data[key]!= null && key == this.DateFormaterDictionary[key]){
        console.log("DATE FIELD BEING FORMATTED", key)
        let date = moment(data[key]).format('YYYY-MM-DD');
        data[key] = date;
      }
    }
    return data;
  }
    //#endregion

  ngOnDestroy(){
    
  }
}

