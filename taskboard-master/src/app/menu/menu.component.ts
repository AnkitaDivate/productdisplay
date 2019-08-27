import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _taskdata:TaskdataService) { }

  ngOnInit() {
  }

  isLoggedIn()
  {
    return this._taskdata.isLoggedIn;
  }

  onLogOut()
  {
    return this._taskdata.logout();
  }

}
