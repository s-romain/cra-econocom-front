import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddMadeWorkComponent } from './add-made-work/add-made-work.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AddWeeklyReportComponent } from './add-weekly-report/add-weekly-report.component';
import { AddMonthlyReportComponent } from './add-monthly-report/add-monthly-report.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTaskComponent,
    AddMadeWorkComponent,
    AccountDashboardComponent,
    AddWeeklyReportComponent,
    AddMonthlyReportComponent
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
