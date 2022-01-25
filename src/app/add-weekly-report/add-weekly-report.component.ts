import { Component, OnInit } from '@angular/core';
import { Task } from '../entity/task';
import { WeeklyReport } from '../entity/weeklyReport';

import { TaskService } from '../service/task.service';
import { WeeklyReportService } from '../service/weekly-report.service';

interface TaskState{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-weekly-report',
  templateUrl: './add-weekly-report.component.html',
  styleUrls: ['./add-weekly-report.component.css']
})
export class AddWeeklyReportComponent implements OnInit {

  task = <Task>{};
  tasks: Task[] = [];

  selectedTask: string = '';

  weeklyReport = <WeeklyReport>{};
  weeklyReports: WeeklyReport[] = [];

  selectedState: string = '';

  constructor(private taskService : TaskService, private weeklyReportService : WeeklyReportService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  addWeeklyReport(id_task: string, duration_weekly_report: string, state_weekly_report: string): void{

    if (!id_task || !duration_weekly_report || !state_weekly_report) { 
      return; 
    }
    
    this.weeklyReport.id_task = id_task;
    this.weeklyReport.duration_weekly_report = duration_weekly_report;
    this.weeklyReport.state_weekly_report = state_weekly_report;

    this.weeklyReportService.addWeeklyReport(this.weeklyReport)
    .subscribe(weeklyReport => {
      this.weeklyReports.push(this.weeklyReport)
    });

  }

  taskStates: TaskState[] = [
    {value: 'inProgress-0', viewValue: 'En cours'},
    {value: 'done-1', viewValue: 'Finit'},
    {value: 'blocked-2', viewValue: 'Bloqué'},
  ];

}
