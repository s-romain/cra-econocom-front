import { Component, OnInit } from '@angular/core';
import { ProjectInformation } from '../entity/projectInformation';

import { ProjectInformationService } from '../service/project-information.service';

@Component({
  selector: 'app-add-monthly-report',
  templateUrl: './add-monthly-report.component.html',
  styleUrls: ['./add-monthly-report.component.css']
})
export class AddMonthlyReportComponent implements OnInit {

  projectInformation = <ProjectInformation>{};
  projectInformations: ProjectInformation[] = [];

  selectedProject: string = '';

  constructor(private projectInformationService : ProjectInformationService) { }

  ngOnInit(): void {
    this.getProjectInformations();
  }

  getProjectInformations(): void {
    this.projectInformationService.getProjectInformations()
    .subscribe(projectInformations => this.projectInformations = projectInformations)
  }

}
