import { Component, OnInit } from '@angular/core';

import { ProjectInformation } from '../entity/projectInformation';
import { MonthlyReport } from '../entity/monthlyReport';

import { ProjectInformationService } from '../service/project-information.service';

import { MonthlyReportService } from '../service/monthly-report.service';

@Component({
  selector: 'app-add-monthly-report',
  templateUrl: './add-monthly-report.component.html',
  styleUrls: ['./add-monthly-report.component.css']
})
export class AddMonthlyReportComponent implements OnInit {

  projectInformation = <ProjectInformation>{};
  projectInformations: ProjectInformation[] = [];

  monthlyReport = <MonthlyReport>{};
  monthlyReports: MonthlyReport[] = [];

  selectedProject: string = '';

  constructor(private projectInformationService : ProjectInformationService, private monthlyReportService : MonthlyReportService) { }

  ngOnInit(): void {
    this.getProjectInformations();
  }

  getProjectInformations(): void {
    this.projectInformationService.getProjectInformations()
    .subscribe(projectInformations => this.projectInformations = projectInformations)
  }

  addMonthlyReport(projectSelected: string): void{

    if (!projectSelected) { 
      return; 
    }
        
    this.monthlyReport.id_account = '1';
    this.monthlyReport.id_project = projectSelected;
    this.monthlyReport.date_monthly_reports = new Date();

    this.monthlyReportService.addMonthlyReport(this.monthlyReport)
    .subscribe(monthlyReport => {
      this.monthlyReports.push(this.monthlyReport)
    });

  }

}
