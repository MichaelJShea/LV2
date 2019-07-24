import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cases-search',
  templateUrl: './cases-search.component.html',
  styleUrls: ['./cases-search.component.scss']
})
export class CasesSearchComponent implements OnInit {
  // DATATABLE SETTINGS
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private autoGroupColumnDef;
  private defaultColDef;
  private rowSelection;
  private pivotPanelShow;
  private paginationPageSize;
  private paginationNumberFormatter;
  private rowData;
  private rowMultiSelectWithClick;

  constructor() { }
  

  ngOnInit() {
    this.rowSelection = 'multiple';
    this.rowMultiSelectWithClick = true;
    this.pivotPanelShow = 'always';
    this.paginationPageSize = 10;
    this.paginationNumberFormatter = function(params){
      return "[" + params.value.toLocaleString() + "]";
    }
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: true,
      filter: true,
      animateRows: true,

    }

  }

  onPageSizeChanged(params){
    var value = document.getElementById("page-size").nodeValue;
    this.gridApi.paginationSetPageSize(Number(value));
  }
  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.generateFakeData();
  }

  generateFakeData(){
    this.columnDefs = [
      {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
      {headerName: 'model', field: 'model', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'test', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
      {headerName: 'price', field: 'price', sortable: true, filter: true },
  
  ];
  
  this.rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];
  }

  


}
