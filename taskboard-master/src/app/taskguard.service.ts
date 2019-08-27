import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskdataService } from './taskdata.service';

@Injectable({
  providedIn: 'root'
})
export class TaskguardService implements CanActivate {


  constructor(private _taskdata:TaskdataService,private _router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    return this.isTaskLoggedIn(state.url);
  }

  isTaskLoggedIn(url:string):boolean
  {
    if(this._taskdata.isLoggedIn)
    {
      return true;
    }
    this._taskdata.redirectURL=url;
    this._router.navigate(['/login']);
    return false;
  }


}
