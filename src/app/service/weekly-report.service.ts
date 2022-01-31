import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {WeeklyReport} from '../entity/weeklyReport';
import {WeeklyReportByAccount} from '../entity/weeklyReportByAccount';
import {Observable,of ,tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeeklyReportService {

  private weeklyReportUrl = 'http://localhost:3000'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  addWeeklyReport(weeklyReport: WeeklyReport): Observable<WeeklyReport> {
    return this.http.post<WeeklyReport>(this.weeklyReportUrl + '/weekly_reports', weeklyReport, this.httpOptions);
  }

  getWeeklyReportByAccount(idAccount: number): Observable<WeeklyReportByAccount[]> {
    const jsonBody = {
      "id_account_entry": idAccount
    };
    return this.http.post<WeeklyReportByAccount[]>(this.weeklyReportUrl + '/rpc/weekly_report_by_account', jsonBody, this.httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable < T > => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}