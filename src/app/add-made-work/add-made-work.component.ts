import { Component, OnInit } from '@angular/core';
import { Task } from '../entity/task';
import { MadeWork } from '../entity/madeWork';
import { TaskService } from '../service/task.service';
import { MadeWorkService } from '../service/made-work.service';

@Component({
  selector: 'app-add-made-work',
  templateUrl: './add-made-work.component.html',
  styleUrls: ['./add-made-work.component.css']
})
export class AddMadeWorkComponent implements OnInit {

  pageName = "Renseigner le travail réalisé";

  task = <Task>{};
  tasks: Task[] = [];

  selectedTask: string = '';

  madeWork = <MadeWork>{};
  madeWorks: MadeWork[] = [];

  constructor(private taskService : TaskService, private madeWorkService: MadeWorkService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  addMadeWork(taskId: string, durationMadeWork: string, dateMadeWork: string){
    if(!taskId || !durationMadeWork || !dateMadeWork)
      return;

    this.madeWork.id_account_made_work = '1';
    this.madeWork.duration_made_work = durationMadeWork;
    this.madeWork.date_of_work_made_work = dateMadeWork;
    this.madeWork.id_task_made_work = taskId;

    this.madeWorkService.addMadeWork(this.madeWork)
    .subscribe(madeWork => {
      this.madeWorks.push(madeWork)
    });
    
  }

}
