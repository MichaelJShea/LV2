import { Component, OnInit, ViewChild } from '@angular/core';
import { AgreementService } from '../../services/agreement-service/agreement.service';
import { IMyDpOptions } from 'mydatepicker';
import { ViewRendererComponent } from './view-renderer/view-renderer.component'
import { DatasheetRendererComponent } from './datasheet-renderer/datasheet-renderer.component'


@Component({
  selector: 'app-agreements-search',
  templateUrl: './agreements-search.component.html',
  styleUrls: ['./agreements-search.component.scss']
})
export class AgreementsSearchComponent implements OnInit {
  AgreementsReturned$: any;
  SearchOptions: any = [];
  SelectedAgreements: any;
  test: any;

  searchParams = {
    "AgreementID": null,
    "ApprovalRequired": null,
    "CountAcre": null,
    "DOReceived": null,
    "AgreementClassCode": null,
    "Lead": null,
    "Owned": null,
    "Active": null,
    "StartActualCloseDate": null,
    "EndActualCloseDate": null,
    "StartASSNDel": null,
    "EndASSNDel": null,
    "StartASSNRec": null,
    "EndASSNRec": null,
    "StartCheckDate": null,
    "EndCheckDate": null,
    "StartAgreementDate": null,
    "EndAgreementDate": null,
    "StartAgreementEnt": null,
    "EndAgreementEnt": null,
    "StartAgreementExp": null,
    "EndAgreementExp": null,
    "StartDropDate": null,
    "EndDropDate": null,
    "StartEffectiveDate": null,
    "EndEffectiveDate": null,
    "StartGeoCodeDate": null,
    "EndGeoCodeDate": null,
    "StartModifiedRec": null,
    "EndModifiedRec": null,
    "StartNextObl": null,
    "EndNextObl": null,
    "StartTrDropDate": null,
    "EndTrDropDate": null,
    "Sort": null,
    "SortOrder": null,
    "PageSize": 50,
    "Skip": 0,
    "Take": 50,
    "Limited": false,
    "UserID": null,
    "AgreementGroupID": null,
    "Range": null,
    "Team": null,
    "Twnshp": null,
    "Abstract": null,
    "AltAgreementNumber": null,
    "Block": null,
    "Book": null,
    "Checkno": null,
    "Comments": null,
    "AgreementForm": null,
    "AgreementName": null,
    "AgreementNumber": null,
    "DepthRemark": null,
    "Entry": null,
    "External": null,
    "FirstAssnRcvdNotes": null,
    "FirstParty": null,
    "From": null,
    "InvoiceNumber": null,
    "Lessee": null,
    "Lessor": null,
    "OwnerName": null,
    "Page": null,
    "Payeename": null,
    "ProvisionRemark": null,
    "RangeDir": null,
    "Sec": null,
    "SecondParty": null,
    "Survey": null,
    "To": null,
    "TwnshpDir": null,
    "User": null,
    "Case": null,
    "CheckStatus": null,
    "Company": null,
    "Agreement": null,
    "AgreementType": null,
    "County": null,
    "Division": null,
    "DropReason": null,
    "ExternalXref": null,
    "District": null,
    "Formation": null,
    "GeoCode": null,
    "Landman": null,
    "AgreementStatus": null,
    "AgreementTractStatus": null,
    "BA": null,
    "Prospects": null,
    "Provision": null,
    "Region": null,
    "RightsType": null,
    "Stages": null,
    "State": null,
    "Status": null,
    "Unit": null,
    "Well": null,
    "Yesno": null
}
  public myDatePickerOptions: IMyDpOptions = {
    width: "50%",
    dateFormat: "yyyy-mm-dd",
    editableDateField: true,
    inline: false,
    openSelectorOnInputClick: true,
    ariaLabelClearDate: "Clear",
    
  }

    // DATATABLE SETTINGS
    private gridApi;
    private gridColumnApi;
    private columnDefs;
    private autoGroupColumnDef;
    private defaultColDef;
    private rowSelection;
    private paginationPageSize;
    private paginationNumberFormatter;
    private rowData;
    private rowMultiSelectWithClick;
    private totalPages = [];
    private currentPage: Number;
    private pageSize: Number;
    private icons;
    private colResizeDefault;
    private frameworkComponents;
    private context;
    private rowHeight;
    rowDataClicked = {};

    //paging setting
    public defaultPage: number;
    public noDirectionPage: number;
    public boundaryPage: number;
    public advancePage: number;
    public sizePage: number;
    public alignmentPage: number;
    public disablePage: number;
    public isDisabled: boolean;

//   myDateRangePickerOptions: IMyDrpOptions = {
//     dateFormat: 'yyyy-mm-dd',
//     editableDateRangeField: true,
//     inline: false,
//     openSelectorOnInputClick: true,

// };



  // public maskDateSlash = [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' - ', /\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/ ];
  testOptions = ["Michael", "Shea", "James", 'Katie', 'Brian']
  YesNo = [
    {name: "Yes", value: "yes"},
    {name: "No", value: "no"}
  ]
  TownshipDirections = [
    {name: 'N', value: 'N'},
    {name: 'S', value: 'S'}
  ]
  RangeDirections = [
    {name: 'E', value: 'E'},
    {name: 'W', value: 'W'}
  ]
  TestData = [
    {name: 'Option #1', value: 1},
    {name: 'Option #2', value: 2},
    {name: 'Option #3', value: 3},
    {name: 'Option #4', value: 4},
    {name: 'Option #5', value: 5}
  ]


  constructor(private _agreementService: AgreementService) {
    this.columnDefs = [
      {headerName: '',field: 'actions',checkboxSelection: true, pinned:'left', cellClass: 'lock-pinned', cellRenderer: 'buttonRenderer', cellRendererParams: { onClick: this.viewAgreement.bind(this), label: 'View'}, filter: false, resizable: true,},
      {headerName: 'Agreement Number', field: "AgreementNumber", pinned: 'left', cellClass: 'lock-pinned'},
      {headerName: 'Tract ID', field: "AgreementTractID", pinned: 'left', cellClass: 'lock-pinned'},
      {headerName: 'ID', field: "AgreementID"},
      {headerName: 'Actual Close Date', field: "ActualCloseDate"},
      {headerName: 'Agreement Date', field: "AgreementDate"},
      {headerName: 'Agreement Form', field: "AgreementForm"},
      {headerName: 'Rights Type', field: "AgreementRightsTypeCode"},
      {headerName: 'Agreement Status', field: "AgreementStatusCode"},
      {headerName: 'Agreement Type', field: "AgreementTypeCode"},
      {headerName: 'Assn Delivered', field: "AssnDeliveredDate"},
      {headerName: 'Assn Received', field: 'AssnReceivedDate'},
      {headerName: 'Block', field: 'Block'},
      {headerName: 'Company Acres', field: 'CompanyAcres_Calc'},
      {headerName: 'County', field: 'County'},
      {headerName: 'Date Entered', field: 'DateEntered'},
      {headerName: 'Drop Date', field: 'DropDate'},
      {headerName: 'Drop Reason', field: 'DropReasonCode'},
      {headerName: 'Effective Date', field: 'EffectiveDate'},
      {headerName: 'Expiration Date', field: 'ExpirationDate'},
      {headerName: 'External', field: 'External'},
      {headerName: 'Formations', field: 'Formations'},
      {headerName: 'Gross Acres', field: 'GrossAcres_Calc'},
      {headerName: 'Lessee', field: 'Lessee'},
      {headerName: 'Lessor', field: 'Lessor'},
      {headerName: 'Net Acres', field: 'NetAcres_Calc'},
      {headerName: 'Prospect', field: 'Prospect'},
      {headerName: 'Quartering', field: 'Quartering'},
      {headerName: 'RNG', field: 'RNG'},
      {headerName: 'RNG DIR', field: 'RNGDIR'},
      {headerName: 'Royalty', field: 'Roylaty'},
      {headerName: 'SEC', field: 'SEC'},
      {headerName: 'State', field: 'State'},
      {headerName: 'Survey', field: 'Survey'},
      {headerName: 'TWP', field: 'TWP'},
      {headerName: 'TWPDIR', field: 'TWPDIR'},
      {headerName: 'Total Co. Acres', field: 'TotalCompanyAcres'},
      {headerName: 'Tract Drop Date', field: 'TractDropDate'},
      {headerName: 'Tract Drop Reason', field: 'TractDropReason'},
      {headerName: 'Tract Number', field: 'TractNumber'},
      {headerName: 'Tract Status', field: 'TractStatus'},
      {headerName: 'Unit Name', field: 'UnitName'},
      {headerName: 'Unit Number', field: 'UnitNumber'},
      {headerName: 'Unit Status', field: 'UnitStatusCode'},
      {headerName: 'Unit Type', field: 'UnitTypeCode'},
      {headerName: 'Well Xrefs', field: 'WellXrefCount'},
    ]
    this.rowSelection = 'multiple';
    this.rowMultiSelectWithClick = true;
    this.colResizeDefault = 'shift';
    // this.pivotPanelShow = 'always';
    this.paginationPageSize = 10;
    this.paginationNumberFormatter = function(params){
      return "[" + params.value.toLocaleString() + "]";
    };
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: true,
      filter: true,
    };
    this.frameworkComponents = {
      buttonRenderer: ViewRendererComponent,
      dataSheetRenderer: DatasheetRendererComponent
    }
    this.rowHeight = 35;

    this.defaultPage = 1;
    this.noDirectionPage = 4;
    this.boundaryPage = 3;
    this.advancePage = 5;
    this.sizePage = 3;
    this.alignmentPage = 3;
    this.disablePage = 3;
    this.isDisabled = true;
   }
  
  ngOnInit() {
    this.getSearchOptions();
    this.searchAgreements();
  }


  getAgreement(id: Number){
    let agreement = this._agreementService.getAgreement(id);
    agreement.subscribe(agreement => {
      console.log(`Agreement #${id} Recieved:`, agreement)
      this.test = agreement
    })
  }

  searchAgreements(search = this.searchParams){
    if(search.StartActualCloseDate){
      search.StartActualCloseDate = search.StartActualCloseDate.formatted;
    }
    if(search.EndActualCloseDate){
      search.EndActualCloseDate = search.EndActualCloseDate.formatted;
    }
    if(search.StartASSNDel){
      search.StartASSNDel = search.StartASSNDel.formatted;
    }
    if(search.EndASSNDel){
      search.EndASSNDel = search.EndASSNDel.formatted;
    }
    if(search.StartASSNRec){
      search.StartASSNRec = search.StartASSNRec.formatted;
    }
    if(search.EndASSNRec){
      search.EndASSNRec = search.EndASSNRec.formatted;
    }
    if(search.StartCheckDate){
      search.StartCheckDate = search.StartCheckDate.formatted;
    }
    if(search.EndCheckDate){
      search.EndCheckDate = search.EndCheckDate.formatted;
    }
    if(search.StartAgreementEnt){
      search.StartAgreementEnt = search.StartAgreementEnt.formatted;
    }
    if(search.EndAgreementEnt){
      search.EndAgreementEnt = search.EndAgreementEnt.formatted;
    }
    if(search.StartAgreementExp){
      search.StartAgreementExp = search.StartAgreementExp.formatted;
    }
    if(search.EndAgreementExp){
      search.EndAgreementExp = search.EndAgreementExp.formatted;
    }
    if(search.StartDropDate){
      search.StartDropDate = search.StartDropDate.formatted;
    }
    if(search.EndDropDate){
      search.EndDropDate = search.EndDropDate.formatted;
    }
    if(search.StartEffectiveDate){
      search.StartEffectiveDate = search.StartEffectiveDate.formatted;
    }
    if(search.EndEffectiveDate){
      search.EndEffectiveDate = search.EndEffectiveDate.formatted;
    }
    if(search.StartGeoCodeDate){
      search.StartGeoCodeDate = search.StartGeoCodeDate.formatted
    }
    if(search.EndGeoCodeDate){
      search.EndGeoCodeDate = search.EndGeoCodeDate.formatted;
    }
    if(search.StartModifiedRec){
      search.StartModifiedRec = search.StartModifiedRec.formatted
    }
    if(search.EndModifiedRec){
      search.EndModifiedRec = search.EndModifiedRec.formatted;
    }
    if(search.StartNextObl){
      search.StartNextObl = search.StartNextObl.formatted;
    }
    if(search.EndNextObl){
      search.EndNextObl = search.EndNextObl.formatted;
    }
    if(search.StartTrDropDate){
      search.StartTrDropDate = search.StartTrDropDate.formatted;
    }
    if(search.EndTrDropDate){
      search.EndTrDropDate = search.EndTrDropDate.formatted;
    }

    let agr = this._agreementService.searchAgreements(search);
    agr.subscribe( data => {
      this.rowData = data;
      console.log('AgreementsReturned$',this.rowData);
    })

  }

  deleteAgreement(id){
    console.log(`Deleting Agreement #${id}`);
    let agreement = this._agreementService.deleteAgreement(id);
    agreement.subscribe(data => {
      console.log(data);
      this.searchAgreements(this.searchParams);
    })
  }

  getSearchOptions(){
    let searchOptions = this._agreementService.getAgreementSearchOptions();
    searchOptions.subscribe(options => {
      this.SearchOptions = options;
      console.log("AGREEMENT SEARCH OPTIONS:",this.SearchOptions);
    })
  }

  SendAlertToUI(){
    alert('Working on this button');
  }

  onPageSizeChanged(event: any){
    var value = this.pageSize = event.target.value;
    this.gridApi.paginationSetPageSize(Number(value));
  }
  goToPage(event: any){
    var pageSelected = this.currentPage = event.target.value;
    this.gridApi.paginationGoToPage(Number(pageSelected));

  }
  onPaginationChanged() {
    this.totalPages = [];
    if (this.gridApi) {
      setText("#page-size", this.gridApi.paginationGetPageSize());
      setText("#current-page", this.gridApi.paginationGetCurrentPage() + 1);
      var total = this.gridApi.paginationGetTotalPages();
      for(var i = 1; i <= total; i++){
        this.totalPages.push(i)
      }
      console.log(this.totalPages);
    }
  }

  onFirstDataRendered(params){
    var AllColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column){
      AllColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(AllColumnIds);
  }

  redrawAllRows(){
    console.log("refreshing table")
    this.gridApi.redrawAllRows();
  }





  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setColDefs();

  }

  setColDefs(){

  }

  onSelectionChanged(){
    var selectedRows = this.gridApi.getSelectedRows();
    this.SelectedAgreements = selectedRows;
  }

  viewAgreement(a){
    console.log(a['AgreementID']);
    var id = a['AgreementID']
    window.open(`http://localhost:4200/agreements/edit/${id}`);
  }
 
}

function setText(selector, text){
  document.querySelector(selector).innerHtml = text;
}

