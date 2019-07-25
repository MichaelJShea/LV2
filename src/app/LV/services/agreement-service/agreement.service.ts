import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOtpions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  constructor(private _http: HttpClient) { }

  createAgreement(agreement){
    return this._http.post('https://localhost:44390/api/agreements', agreement, httpOtpions);
  }

  getAgreement(id){
    return this._http.get(`https://localhost:44390/api/agreements/${id}`, httpOtpions)
  }

  updateAgreement(agreement, id){ 
    return this._http.patch(`https://localhost:44390/api/agreements/${id}`, agreement, httpOtpions)
  }

  searchAgreements(search){
    return this._http.post('https://localhost:44390/api/agreements/search', search, httpOtpions);
  }

  deleteAgreement(id){
    return this._http.delete(`https://localhost:44390/api/agreements/${id}`, httpOtpions);
  }

  getAgreementSearchOptions(){
    return this._http.get('https://localhost:44390/api/agreements/TestMethod', httpOtpions);
  }


  createAgreementComment(agreementId, comment, userId){
    return this._http.post(`https://localhost:44390/api/agreements/${agreementId}/comments`, comment, userId);
  }

  getAgreementComments(agreementId){
    return this._http.get(`https://localhost:44390/api/agreements/${agreementId}/comments`);
  }

  getAgreementComment(agreementId, commentId){
    return this._http.get(`https://localhost:44390/api/agreements/${agreementId}/comments/${commentId}`)
  }

  updateAgreementComment(agreementId, commentId, comment){
    return this._http.patch(`https://localhost:44390/api/agreements/${agreementId}/comments/${commentId}`, comment);
  }

  deleteAgreementComment(agreementId, commentId){
    return this._http.delete(`https://localhost:44390/api/agreements/${agreementId}/comments/${commentId}`);
  }

  createAgreementTract(agreementId, tract){
    return this._http.post(`https://localhost:44390/api/agreements/${agreementId}/tracts`, tract);
  }
  
  getAgreementTracts(agreementId){
    return this._http.get(`https://localhost44390/api/agreements/${agreementId}/tracts`);
  }
  
  updateAgreementTract(agreementId, tractId){
    return this._http.get(`https://localhost:44390/api/agreements/${agreementId}/tracts/${tractId}`);
  }
  
  deleteAgreementTract(agreementId, tractId){
    return this._http.delete(`https://localhost:44390/api/agreements/${agreementId}/tracts/${tractId}`);
  }
}
