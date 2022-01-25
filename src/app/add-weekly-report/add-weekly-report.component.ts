import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

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

  constructor() { }

  ngOnInit(): void {
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  taskStates: TaskState[] = [
    {value: 'inProgress-0', viewValue: 'En cours'},
    {value: 'done-1', viewValue: 'Finit'},
    {value: 'blocked-2', viewValue: 'Bloqué'},
  ];

}
