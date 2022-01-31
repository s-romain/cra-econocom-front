import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddMonthlyReportComponent } from './add-monthly-report/add-monthly-report.component';
import { AddWeeklyReportComponent } from './add-weekly-report/add-weekly-report.component';
import { WeeklyReportComponent } from './weekly-report/weekly-report.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'addMonthlyReport', component: AddMonthlyReportComponent },
  { path: 'addWeeklyReport', component: AddWeeklyReportComponent },
  { path: 'weeklyReport', component: WeeklyReportComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
