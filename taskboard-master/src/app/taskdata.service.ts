import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {

  constructor( private _router: Router) { }

  currentUser;
  redirectURL:string;
  login(user_email:string,user_password:string)
  {
    if(user_email=='admin' && user_password== '1234')
    {
      this.currentUser={
        user_email:user_email,
        password:user_password,
        isAdmin:true
      };
      return;
    }

    this.currentUser={
      user_email:user_email,
      password:user_password,
      isAdmin:false
    };
  }
  logout()
  {
    this.currentUser=null;
    this.redirectURL="";
    this._router.navigate([""]);
  }

  get isLoggedIn(): boolean
  {
    return !!this.currentUser;
  }
}
