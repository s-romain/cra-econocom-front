import { Component, OnInit } from '@angular/core';
import { WeeklyReportByAccount } from '../entity/weeklyReportByAccount';
import { WeeklyReportService } from '../service/weekly-report.service';


@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.css']
})
export class WeeklyReportComponent implements OnInit {

  weeklyReportByAccount = <WeeklyReportByAccount>{};
  weeklyReportByAccounts: WeeklyReportByAccount[] = [];

  displayedColumns: string[] = ['name_task', 'duration_weekly_report', 'date_weekly_reports'];

  constructor(private weeklyReportService : WeeklyReportService) { }

  ngOnInit(): void {
    this.getWeeklyReportByAccount(1);
  }

  getWeeklyReportByAccount(idAccount: number): void{
    this.weeklyReportService.getWeeklyReportByAccount(idAccount)
    .subscribe(weeklyReportByAccounts => this.weeklyReportByAccounts = weeklyReportByAccounts);
  }

}
