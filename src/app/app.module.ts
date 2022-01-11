import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddMadeWorkComponent } from './add-made-work/add-made-work.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTaskComponent,
    AddMadeWorkComponent,
    AccountDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
