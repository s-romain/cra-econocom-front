import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  pageName = "Ajout d'une tâche";

  constructor() { }

  ngOnInit(): void {
  }

}
