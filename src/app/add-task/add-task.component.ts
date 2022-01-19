import { Component, OnInit } from '@angular/core';
import { Task } from '../entity/task';
import { Account } from '../entity/account';
import { TaskService } from '../service/task.service';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  pageName = "Ajout d'une tâche";

  task = <Task>{};
  tasks: Task[] = [];

  selectedParentTask: string = '';

  account = <Account>{};
  accounts: Account[] = [];

  selectedAccountManager: string = '';

  constructor(private taskService : TaskService, private accountService : AccountService) { }

  ngOnInit(): void {
    this.getTasks();
    this.getAccounts();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  getAccounts(): void {
    this.accountService.getAccounts()
    .subscribe(accounts => this.accounts = accounts);
  }

  addTask(parentTaskId: string, taskAuthor: string, durationTask: string, typeTask: string, nameTask: string, projectNameTask: string): void{

    if (!taskAuthor || !durationTask || !typeTask || !nameTask || !projectNameTask) { 
      console.log("Pas de manga name");
      return; 
    }

    console.log("taskAuthor: " + taskAuthor);
    
    this.task.id_parent_task = parentTaskId;
    this.task.id_manager = taskAuthor;
    this.task.duration_task = durationTask;
    this.task.type_task = typeTask;
    this.task.name_task = nameTask;
    this.task.project_name_task = projectNameTask;

    this.taskService.addTask(this.task)
    .subscribe(task => {
      this.tasks.push(task)
    });
  }

}