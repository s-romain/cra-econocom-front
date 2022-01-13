import { Component, OnInit } from '@angular/core';
import { AccountLogin } from '../entity/accountLogin';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageName = "Page d'identification";

  accountLogin = <AccountLogin>{};
  accountLogins: AccountLogin[] = [];

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  getAccount(loginValue: string, passwordValue: string): void {
    this.loginService.getAccountByLoginPassword(loginValue, passwordValue)
    .subscribe(accountLogins => this.accountLogins = accountLogins);
  }

}
