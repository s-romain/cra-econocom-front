import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AccountLogin } from '../entity/accountLogin';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accountUrl = 'http://127.0.0.1:3000/accounts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' })
  };

  constructor(private http: HttpClient) { }

  getAccountByLoginPassword(login: string, password: string): Observable<AccountLogin[]> {
    return this.http.get<AccountLogin[]>(this.accountUrl + '?login_account=eq.' + login + "&&password_account=eq." + password, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched accounts')),
        catchError(this.handleError<AccountLogin[]>('getAccounts', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
       console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
