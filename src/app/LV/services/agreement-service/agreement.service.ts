import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


import { LVUser } from '../../models/LV-User/lv-user'
import { Agreement } from '../../models/agreements/agreement';
import { AgreementSearch} from '../../models/search/agreement-search';
import { AgreementTract } from '../../models/agreements/agreement-tract'
import { AgreementComment } from '../../models/agreements/agreement-comment';
import { AgreementProvision} from '../../models/agreements/agreement-provision';
import { AgreementRelatedParty} from '../../models/agreements/agreement-related-party';



let httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
})
let httpOtpions = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})
export class AgreementService {
  private API_URL = 'https://localhost:44390/api';

  constructor(private _http: HttpClient) { }

  //#region AGREEMENTS
  createAgreement(agreement: Agreement): Observable<HttpResponse<Agreement>>{
    return this._http.post<Agreement>(`${this.API_URL}/agreements`, agreement, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  getAgreement(agreementId:Number): Observable<HttpResponse<Agreement>>{
    return this._http.get<Agreement>(`${this.API_URL}/agreements/${agreementId}`, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  // Not Currently Being Used
  updateAgreement(agreement:Agreement, agreementId: Number): Observable<HttpResponse<Agreement>>{ 
    return this._http.patch<Agreement>(`${this.API_URL}/agreements/${agreementId}`, agreement,{observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  updateEntireAgreement(agreement:Agreement, agreementId: Number){
    return this._http.put<Agreement>(`${this.API_URL}/agreements/${agreementId}`, agreement)
  }

  searchAgreements(search){
    return this._http.post(`${this.API_URL}/agreements/search`, search, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  deleteAgreement(agreementId:Number){
    return this._http.delete(`${this.API_URL}/agreements/${agreementId}`, httpOtpions);
  }

  getAgreementSearchOptions(): Observable<any>{
    return this._http.get(`${this.API_URL}/agreements/TestMethod`, httpOtpions);
  }
  //#endregion

  //#region AGREEMENT COMMENTS
  createAgreementComment(agreementId:Number, comment: AgreementComment): Observable<HttpResponse<AgreementComment>>{
    console.log("COMMENT GOING TO SERVER", comment)
    return this._http.post<AgreementComment>(`${this.API_URL}agreements/${agreementId}/comments`, comment, {observe: 'response', headers: httpHeaders, responseType: 'json'} );
  }

  getAgreementComments(agreementId: Number):Observable<HttpResponse<AgreementComment[]>>{
    return this._http.get<AgreementComment[]>(`https://localhost:44390/api/agreements/${agreementId}/comments`, {observe: 'response', headers: httpHeaders, responseType: 'json'});

  }

  getAgreementComment(agreementId: Number, commentId: Number){
    let comment = this._http.get<AgreementComment>(`https://localhost:44390/api/agreements/${agreementId}/comments/${commentId}`)
    return comment;
  }

  updateAgreementComment(agreementId, commentId, comment, userId=0){
    return this._http.patch(`https://localhost:44390/api/agreements/${agreementId}/comments/${commentId}`, comment);
  }

  deleteAgreementComment(agreementId:Number, commentId: Number){
    return this._http.delete(`https://localhost:44390/api/agreements/${agreementId}/comments/${commentId}`);
  }
  //#endregion
  
  //#region AGREEMENT TRACTS
  createAgreementTract(agreementId: Number, agreementTract: AgreementTract):Observable<HttpResponse<AgreementTract>>{
    return this._http.post<AgreementTract>(`https://localhost:44390/api/agreements/${agreementId}/tracts`, agreementTract, {observe: 'response', headers: httpHeaders, responseType: 'json'});
  }
  
  getAgreementTracts(agreementId: Number):Observable<HttpResponse<AgreementTract[]>>{
    return this._http.get<AgreementTract[]>(`https://localhost:44390/api/agreements/${agreementId}/tracts`, {observe: 'response', headers: httpHeaders, responseType: 'json'});
  }

  getAgreementTractOptions(){
    return this._http.get(`https://localhost:44390/api/agreements/tracts/options`);
  }
  
  updateAgreementTracts(agreementId: Number, agreementTracts: Array<AgreementTract> ){
    return this._http.put(`https://localhost:44390/api/agreements/${agreementId}/tracts/update`, agreementTracts, httpOtpions);
  }
  
  deleteAgreementTract(agreementId, tractId){
    return this._http.delete(`https://localhost:44390/api/agreements/${agreementId}/tracts/${tractId}`);
  }
  //#endregion
  
  //#region AGREEMENT PROVISIONS

  createAgreementProvision(agreementId: Number, newProvision:AgreementProvision): Observable<HttpResponse<AgreementProvision>>{
    return this._http.post<AgreementProvision>(`${this.API_URL}/agreements/${agreementId}/provisions`, newProvision, {observe: 'response', headers: httpHeaders, responseType: 'json'} )
  }

  getAgreementProvision(agreementId: Number, provisionId: Number):Observable<HttpResponse<AgreementProvision>>{
    return this._http.get<AgreementProvision>(`${this.API_URL}/agreements/${agreementId}/provisions/${provisionId}`,{observe: 'response', headers: httpHeaders, responseType: 'json'} )
  }

  getAgreementProvisions(agreementId: Number):Observable<HttpResponse<AgreementProvision[]>>{
    return this._http.get<AgreementProvision[]>(`${this.API_URL}/agreements/${agreementId}/provisions`, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  updateAgreementProvision(agreementId: Number, provision: AgreementProvision):Observable<HttpResponse<AgreementProvision>>{
    return this._http.put<AgreementProvision>(`${this.API_URL}/agreements/${agreementId}/provisions/${provision.AgreementProvisionID}`, provision, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  deleteAgreementProvision(agreementId: Number, provisionId: Number): Observable<HttpResponse<AgreementProvision>>{
    return this._http.delete<AgreementProvision>(`${this.API_URL}/agreements/${agreementId}/provisions/${provisionId}`, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  //#endregion

  //#region AGREEMENT CROSS REFERENCES

  //#endregion

  //#region AGREEMENT RELATED PARTIES
  createAgreementRelatedParty(agreementId: Number, relatedParty: AgreementRelatedParty):Observable<HttpResponse<AgreementRelatedParty>>{
    return this._http.post<AgreementRelatedParty>(`${this.API_URL}/agreements/${agreementId}/related_parties`, relatedParty, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  getAgreementRelatedParties(agreementId:Number): Observable<HttpResponse<AgreementRelatedParty[]>>{
    return this._http.get<AgreementRelatedParty[]>(`${this.API_URL}/agreements/${agreementId}/related_parties`, {observe: 'response', headers: httpHeaders, responseType: 'json'});
  }

  updateAgreementRelatedParty(agreementId: Number, relatedParty: AgreementRelatedParty): Observable<HttpResponse<AgreementRelatedParty>>{
    return this._http.put<AgreementRelatedParty>(`${this.API_URL}/agreements/${agreementId}/related_parties/${relatedParty.AgreementRelatedPartyID}`, relatedParty, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  deleteRelatedParty(agreementId: Number, relatedParty): Observable<HttpResponse<AgreementRelatedParty>>{
    return this._http.delete<AgreementRelatedParty>(`${this.API_URL}/agreements/${agreementId}/related_parties/${relatedParty.AgreementRealtedPartyID}`, {observe: 'response', headers: httpHeaders, responseType: 'json'})
  }

  //#endregion

  //#region AGREEMENT AQUISITIONS


  //#endregion

  //#region AGREEMENT IMAGES

  //#endregion
  
  //#region ERROR HANDLER
  private handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      // Client Side Error
      errorMessage = `Error: ${error.error.message}`;
    }
    else{
      // Server Side Error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  //#endregion


}
