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

  account = <Account>{};
  accounts: Account[] = [];

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

}