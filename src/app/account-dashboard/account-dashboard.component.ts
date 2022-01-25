import { Component, OnInit } from '@angular/core';
import { MadeWorkByAccount } from '../entity/madeWorkByAccount';
import { MadeWorkService } from '../service/made-work.service';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.css']
})
export class AccountDashboardComponent implements OnInit {

  pageName = "Travail effectué";

  madeWorkByAccount = <MadeWorkByAccount>{};
  madeWorkByAccounts: MadeWorkByAccount[] = [];

  constructor(private madeWorkService : MadeWorkService) { }

  ngOnInit(): void {
    this.getMadeWorkByAccount();
    console.log("test: " + this.madeWorkByAccounts);
  }

  getMadeWorkByAccount(): void {
    this.madeWorkService.getMadeWorkByAccount({"idaccount": 1})
    .subscribe(madeWorkByAccount => {
      this.madeWorkByAccounts.push(madeWorkByAccount)
    });
  }

}
