import { Component, OnInit } from '@angular/core';
import { Task } from '../entity/task';
import { TaskService } from '../service/task.service';

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

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  taskStates: TaskState[] = [
    {value: 'inProgress-0', viewValue: 'En cours'},
    {value: 'done-1', viewValue: 'Finit'},
    {value: 'blocked-2', viewValue: 'Bloqué'},
  ];

}
