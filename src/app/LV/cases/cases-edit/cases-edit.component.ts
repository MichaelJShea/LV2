import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases-edit',
  templateUrl: './cases-edit.component.html',
  styleUrls: ['./cases-edit.component.scss']
})
export class CasesEditComponent implements OnInit {
  private Module: String;
  constructor() {
    this.Module = "CASE"
  }

  ngOnInit() {

  }

}
