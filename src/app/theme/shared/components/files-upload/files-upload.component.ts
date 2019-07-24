import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 

import { FileUploadValidators } from '@iplab/ngx-file-upload'
@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FilesUploadComponent implements OnInit {
  
  @Input() ID: Number;

  private UserID;
  private Images;
  private filesControl = new FormControl(null, FileUploadValidators.filesLimit(1));
  private selectOptions;

  public imageForm = new FormGroup({
      files: this.filesControl
      
  });

  constructor() {
    this.selectOptions = [
      {name: 'ACH (secured) (ACH)', value: 'TEST'},
      {name: 'AFE - AFE Status Report (AFESTAT)', value: 'TEST'},
      {name: 'Affidavit of Identity (AOI)', value: 'TEST'},
      {name: 'Allocation Breakdown (ALL)', value: 'TEST'},
      {name: 'Area of Mutual Interest (AMI)', value: 'TEST'},
      {name: 'Assignment (ASN)', value: 'TEST'},
      {name: 'Change of Address (CHA)', value: 'TEST'},
      {name: 'Change of Operator Form (COP)', value: 'TEST'},
      {name: 'Communitization Agreement (COM)', value: 'TEST'},
      {name: 'Complete File ACQ-DIV (ACD)', value: 'TEST'},
      {name: 'Confidentiality Agreement (CA)', value: 'TEST'},
      {name: 'Consent Agreement - Concurrent Spacing (CAS)', value: 'TEST'},
      {name: 'Consent Agreement - Water Encroachment (CAW)', value: 'TEST'},
      {name: 'Conveyance (MGR)', value: 'TEST'},
      {name: 'Curative (TCU)', value: 'TEST'},
      {name: 'Curative - Agency Agmt (AGA)', value: 'TEST'},
      {name: 'Curative - Death Cert (COD)', value: 'TEST'},
      {name: 'Curative - Probate (PRO)', value: 'TEST'},
      {name: 'Curative - Trust (TRU)', value: 'TEST'},
      {name: 'Damage Settlement and Release - Agreement (DAM)', value: 'TEST'},
      {name: 'Declaration of Pooling (DOP)', value: 'TEST'},
      {name: 'Defect Schedule (DFS)', value: 'TEST'},
      {name: 'Division Order - Miscellaneous (DMI)', value: 'TEST'},
      {name: 'Division Order - Owner (DOO)', value: 'TEST'},
      {name: 'Division Order - Purchaser/Operator (DO)', value: 'TEST'},
      {name: 'DOI Upload Schedules (DOI)', value: 'TEST'},
      {name: 'Drilling DOI/Landman Recap (DDOI)', value: 'TEST'},
      {name: 'Due Dilligence Review (DUE)', value: 'TEST'},
      {name: 'Enviromental Health and Saftey (EHS)', value: 'TEST'},
      {name: 'Exploration Agreements (EXA)', value: 'TEST'},
      {name: 'Extensions (EXT)', value: 'TEST'},
      {name: 'Farm Out (FOA)', value: 'TEST'},
      {name: 'Gas Agreement (GAS)', value: 'TEST'},
      {name: 'Geoscience - Misc (GEO)', value: 'TEST'},
      {name: 'Insurance/Surety (INS)', value: 'TEST'},
      {name: 'Joint Development Agreements (JSA)', value: 'TEST'},
      {name: 'Joint Operating Agreement (JOA)', value: 'TEST'},
      {name: 'Joint Operating Agreement Memo (JOM)', value: 'TEST'},
      {name: 'Joint Operating Agreement Ramification', value: 'TEST'},
      {name: 'Joint Venture Agreement (JVA)', value: 'TEST'},
      {name: 'Land Deal Summary/LPR (LDS)', value: 'TEST'},
      {name: 'Lease Affidavit (LAF)', value: 'TEST'},
      {name: 'Lease Amendment (LAM)', value: 'TEST'},
      {name: 'Lease Correction (LEC)', value: 'TEST'},
      {name: 'Lease Memorandums (LEM)', value: 'TEST'},
      {name: 'Lease Out Agreement (LOA)', value: 'TEST'},
      {name: 'Legal - Brankruptycy Notice (LBN)', value: 'TEST'},
      {name: 'Letter Agreement (LAG)', value: 'TEST'},
      {name: 'Letter-In-Lieu (LIL)', value: 'TEST'},
      {name: 'Misc Agreement (MIS)', value: 'TEST'},
      {name: 'Original Executed/Recorded Instrument (OEI)', value: 'TEST'},
      {name: 'Other/ Miscellaneous (OTH)', value: 'TEST'},
      {name: 'Owner Correspondence (OWC)', value: 'TEST'},
      {name: 'Owner Transfers (OWT)', value: 'TEST'},
      {name: 'Ownership Change Authorization (OCA)', value: 'TEST'},
      {name: 'Participation Agreements (PAG)', value: 'TEST'},
      {name: 'Partner Consent (CON)', value: 'TEST'},
      {name: 'Payment Information (PAY)', value: 'TEST'},
      {name: 'Payout Provision Memo (POM)', value: 'TEST'},
      {name: 'Payout Status Report (POS)', value: 'TEST'},
      {name: 'Permits (PER)', value: 'TEST'},
      {name: 'Plan of Unitization (POU)', value: 'TEST'},
      {name: 'Plats - Lease (PLT)', value: 'TEST'},
      {name: 'Plats - WellFacility Design (PFD)', value: 'TEST'},
      {name: 'Pre Polling Letter Agreement (PPLA)', value: 'TEST'},
      {name: 'Prod Unit Number (PUN)', value: 'TEST'},
      {name: 'Production Sharing Agreement (PRSA)', value: 'TEST'},
      {name: 'Property Acquisition Report (PAR)', value: 'TEST'},
      {name: 'Property Liquidation Report', value: 'TEST'},
      {name: 'Proposals - Elections (AFE)', value: 'TEST'},
      {name: 'Prospect Origination Report (POR)', value: 'TEST'},
      {name: 'Purchase Sale Agreements (PSA)', value: 'TEST'},
      {name: 'Ratification - Lease (RAT)', value: 'TEST'},
      {name: 'Regulatory - Federal (FED)', value: 'TEST'},
      {name: 'Regulatory - Increased Density (RID)', value: 'TEST'},
      {name: 'Regulatory - Location Exception (RLE)', value: 'TEST'},
      {name: 'Regulatory - Pooling (RPO)', value: 'TEST'},
      {name: 'Regulatory - Spacing (RSP)', value: 'TEST'},
      {name: 'Regulatory - Spud Notice (RSN)', value: 'TEST'},
      {name: 'Regulatory - Well Misc (REG)', value: 'TEST'},
      {name: 'Release (REL)', value: 'TEST'},
      {name: 'Revenue Remittance (RVR)', value: 'TEST'},
      {name: 'Rights of Way - Easement - Surface Agreement (RES)', value: 'TEST'},
      {name: 'Rights of Way, Leases - Non Oil and Gas (ROW)', value: 'TEST'},
      {name: 'Settlement Statement - Closed (SSC)', value: 'TEST'},
      {name: 'Settlement Statement - PRELIM (SSP)', value: 'TEST'},
      {name: 'Stipulation and Cross Conveyance (SCC)', value: 'TEST'},
      {name: 'Surface USe Agreement (SUR)', value: 'TEST'},
      {name: 'Tax Levy Documents (TLA)', value: 'TEST'},
      {name: 'Title - Abstract (TAB)', value: 'TEST'},
      {name: 'Title - Aquisition Title Opinion (TAQ)', value: 'TEST'},
      {name: 'Title - Cursory (TCY)', value: 'TEST'},
      {name: 'Title DOTO (TDO)', value: 'TEST'},
      {name: 'Title - Drilling Opinion (TDR)', value: 'TEST'},
      {name: 'Title - Miscellaneous (TMI)', value: 'TEST'},
      {name: 'Title - Ownership Report (TOR)', value: 'TEST'},
      {name: 'Title - Source Deed (TSD)', value: 'TEST'},
      {name: 'Title - Supplemental Title Opinion (TSO)', value: 'TEST'},
      {name: 'Unrecorded Instrument (URI)', value: 'TEST'},
      {name: 'W9, W8/Tax Levy (Secured) (IRS)', value: 'TEST'},
      {name: 'Well - Contracts (WCN)', value: 'TEST'},
      {name: 'Well - Drilling Economics (ECON)', value: 'TEST'},
      {name: 'Well - Drilling Program/Procedures (WDP)', value: 'TEST'},
      {name: 'Well - Survey Plats (WPLT)', value: 'TEST'},
      {name: 'Well Analysis - OGW (OGW)', value: 'TEST'},
      {name: 'Well Cement Bond Log (CBL)', value: 'TEST'},
      {name: 'Well Cementing Reports (WCR)', value: 'TEST'},
      {name: 'Well Completion Frac Schedule (CSC)', value: 'TEST'},
      {name: 'Well Completion Frac Summary (CFS) ', value: 'TEST'},
      {name: 'Well Completion Reports (DCR)', value: 'TEST'},
      {name: 'Wel Core (Photos, Samples Library Loc) (CORE)', value: 'TEST'},
      {name: 'Well Cuttings (Photos, Samples Library Loc) (CUT)', value: 'TEST'},
      {name: 'Well Drilling Reports - Daily (DDR)', value: 'TEST'},
      {name: 'Well DWC (Drill Well Clearance) Build (DWC BLD)', value: 'TEST'},
      {name: 'Well DWC (Drill Well Clearance) Spud (DWC SPD)', value: 'TEST'},
      {name: 'Well DWC (Drill Well Clearance) Staking (DWC STK)', value: 'TEST'},
      {name: 'Well Equipment (Wellhead to Meter) (EQP)', value: 'TEST'},
      {name: 'Well Field Reports - Misc (WFR)', value: 'TEST'},
      {name: 'Well Final Survey (SVY)', value: 'TEST'},
      {name: 'Well Flowback Reports - Hourly, Daily, or Final (FLO)', value: 'TEST'},
      {name: 'Well Geo Prog (WGP)', value: 'TEST'},
      {name: 'Well Geo Steer (WGS)', value: 'TEST'},
      {name: 'Well Information Distribution (WID)', value: 'TEST'},
      {name: 'Well Log LWD/MWD (WWD)', value: 'TEST'},
      {name: 'Well Log Mudlog (WML)', value: 'TEST'},
      {name: 'Well Log OH Log (WOL)', value: 'TEST'},
      {name: 'Well Marketing Reports/Contracts (MKT)', value: 'TEST'},
      {name: 'Well MicroSeismic/VSP (VSP)', value: 'TEST'},
      {name: 'Well Partner Reports - Daily (DPR)', value: 'TEST'},
      {name: 'Well Plan (Directional or Otherwise) (PLN)', value: 'TEST'},
      {name: 'Well Presure Tests/Surveys (TST)', value: 'TEST'},
      {name: 'Well Production Document (WEL)', value: 'TEST'},
      {name: 'Well Production Reports - Daily (PRD)', value: 'TEST'},
      {name: 'Well Production Reports - LOS (LOS)', value: 'TEST'},
      {name: 'Well Production Reports - Monthly (PRM)', value: 'TEST'},
      {name: 'Well Run Ticket (TKT)', value: 'TEST'},
      {name: 'Well Schematics (SCM)', value: 'TEST'},
      {name: 'Well Service Agreement (WSV)', value: 'TEST'},
      {name: 'Well Setup Memo (WSM)', value: 'TEST'},
      {name: 'Well WBS (WBS)', value: 'TEST'}
    ]
   }



  ngOnInit() {
    console.log("INPUT ID: ", this.ID);
    console.log(this.imageForm.controls['files'].value);
  }


  public uploadImage(image: File){
    console.log(image);
  }

  public toggleStatus(){
    this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
  }


}
