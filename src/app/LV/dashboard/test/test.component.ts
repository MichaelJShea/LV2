import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard-service/dashboard.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {
  }

  testAlert(){
    let test = this._dashboardService.testMethod();
    if(test){
      return alert(test)
    }
    else{
      return alert('Dashboard Service NOT Working ')
    }
  }

}
