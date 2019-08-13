import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units-edit',
  templateUrl: './units-edit.component.html',
  styleUrls: ['./units-edit.component.scss']
})
export class UnitsEditComponent implements OnInit {
  private Module: String; 

  constructor() {
    this.Module = "UNIT"
   }

  ngOnInit() {
  }

}
