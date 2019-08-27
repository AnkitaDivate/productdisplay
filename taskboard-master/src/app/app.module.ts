import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TaskboardsdisplayComponent } from './taskboardsdisplay/taskboardsdisplay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule,NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskboardsdisplayComponent,
    Taskdisplay1Component,
    MenuComponent,
    HomeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,FormsModule,NgbModule,NgbPaginationModule,NgbAlertModule,ReactiveFormsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
