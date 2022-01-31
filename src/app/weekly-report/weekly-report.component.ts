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

  constructor(private weeklyReportService : WeeklyReportService) { }

  ngOnInit(): void {
    this.getWeeklyReportByAccount();
  }

  getWeeklyReportByAccount(): void{
    this.weeklyReportService.getWeeklyReportByAccount(1)
    .subscribe(weeklyReportByAccounts => this.weeklyReportByAccounts = weeklyReportByAccounts);
  }

}
