import { Component, OnInit } from '@angular/core';
import { MonthlyReportByAccount } from '../entity/monthlyReportByAccount';
import { MonthlyReportService } from '../service/monthly-report.service';

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css']
})
export class MonthlyReportComponent implements OnInit {

  monthlyReportByAccount = <MonthlyReportByAccount>{};
  monthlyReportByAccounts: MonthlyReportByAccount[] = [];

  displayedColumns: string[] = ['name_project', 'date_monthly_reports'];

  constructor(private monthlyReportService : MonthlyReportService) { }

  ngOnInit(): void {
    this.getMonthlyReportByAccount(1);
  }

  getMonthlyReportByAccount(idAccount: number): void{
    this.monthlyReportService.getMonthlyReportByAccount(idAccount)
    .subscribe(monthlyReportByAccounts => this.monthlyReportByAccounts = monthlyReportByAccounts);
  }

}
