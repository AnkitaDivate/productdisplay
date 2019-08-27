import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { LoginComponent } from './login/login.component';
import { TaskguardService } from './taskguard.service';

const arr:Routes=[
    {path:'',component:HomeComponent},
    {path:'taskboard',canActivate:[TaskguardService],component:Taskdisplay1Component},
    {path:'login',component:LoginComponent}
];

export const routing =RouterModule.forRoot(arr);


