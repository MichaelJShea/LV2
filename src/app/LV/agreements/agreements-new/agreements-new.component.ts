import { Component, OnInit, ViewChild } from '@angular/core';
import  * as moment from 'moment';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { AgreementService } from '../../services/agreement-service/agreement.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Agreement } from '../../models/agreements/agreement'
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-agreements-new',
  templateUrl: './agreements-new.component.html',
  styleUrls: ['./agreements-new.component.scss']
})
export class AgreementsNewComponent implements OnInit {
  private NewAgreement: Agreement;
  private SelectOptions: any[];
  TermUnits = [
    { description: 'Days', value: 'D'},
    { description: 'Months', value: 'M'},
    { description: 'Years', value: 'Y' }
  ]
  public DateMask = [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' - ', /\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/ ];

  // Toast Options
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  // End Toast Options

  constructor( private _agreementService: AgreementService, private toastyService: ToastyService, private router: Router) {
    this.NewAgreement = new Agreement;
    this.SelectOptions = []
   }

  ngOnInit() {
    this.getAgreementSelectOptions();
  }

  createNewAgreement(agreement : Agreement){
    console.log("NEW AGREEMENT COMING IN HOT", agreement)
    this._agreementService.createAgreement(agreement)
    .subscribe((response) => {
      if(response.status === 201 && response.ok === true){
        this.addToast({title:'Agreement Created!', msg:'Save Was Successful', timeout: 1000, theme:'bootstrap', position:'bottom-right', type:'success'})
        console.log("REPONSE:", response)
        console.log("New Agreement Made",response.body); 
        this.router.navigate(['agreements', 'edit', `${response.body.AgreementID}`])
      }
      else{
        this.addToast({title:'Agreement Creation Unsuccesfull', msg:'Please Review Form and Try Again ', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'danger'})
      }
    })
  }


  getAgreementSelectOptions(){
    this._agreementService.getAgreementSearchOptions()
    .subscribe( (data: any[]) => {
      this.SelectOptions = data
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

  ngOnDestroy(){
    
  }

}
