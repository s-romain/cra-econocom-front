import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.css']
})
export class AccountDashboardComponent implements OnInit {

  pageName = "Travail effectué";

  constructor() { }

  ngOnInit(): void {
  }

}
