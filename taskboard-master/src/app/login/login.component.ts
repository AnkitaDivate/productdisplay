import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;

  constructor(private fb:FormBuilder,private _router:Router,private _taskdata:TaskdataService) { }

  ngOnInit() {
    this.login=this.fb.group({
      user_email:new FormControl(null),
      uer_password:new FormControl(null)
    });
  }

  onLoginSubmit()
  {
     this._taskdata.login(
       this.login.value.user_email,
       this.login.value.user_password
     );
     if(this._taskdata.redirectURL)
     {
       this._router.navigateByUrl(this._taskdata.redirectURL);
     }
     else
     {
       this._router.navigate(["/taskboard"])
     }
  }

}
