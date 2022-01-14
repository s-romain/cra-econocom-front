import { Component, OnInit } from '@angular/core';
import { Account } from '../entity/account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageName = "Page d'identification";

  account = <Account>{};
  accounts: Account[] = [];

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  getAccount(loginValue: string, passwordValue: string): void {
    this.accountService.getAccountByLoginPassword(loginValue, passwordValue)
    .subscribe(accounts => this.accounts = accounts);
  }

}
