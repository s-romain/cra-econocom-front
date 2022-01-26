import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddMadeWorkComponent } from './add-made-work/add-made-work.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AddWeeklyReportComponent } from './add-weekly-report/add-weekly-report.component';
import { AddMonthlyReportComponent } from './add-monthly-report/add-monthly-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'addMadeWork', component: AddMadeWorkComponent },
  { path: 'accountDashboard', component: AccountDashboardComponent },
  { path: 'addMonthlyReportComponent', component: AddMonthlyReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
