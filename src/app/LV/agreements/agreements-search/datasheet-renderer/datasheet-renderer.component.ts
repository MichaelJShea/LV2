import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-datasheet-renderer',
  templateUrl: './datasheet-renderer.component.html',
  styleUrls: ['./datasheet-renderer.component.scss']
})
export class DatasheetRendererComponent implements ICellRendererAngularComp {

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      console.log("PARAMS",params);
      this.params.onClick(params.rowData);

    }
  }

}
