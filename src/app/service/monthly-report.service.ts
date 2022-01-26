import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {MonthlyReport} from '../entity/monthlyReport';
import {Observable,of ,tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthlyReportService {

  private monthlyReportUrl = 'http://localhost:3000/monthly_reports'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  addMonthlyReport(monthlyReport: MonthlyReport): Observable<MonthlyReport> {
    return this.http.post<MonthlyReport>(this.monthlyReportUrl, monthlyReport, this.httpOptions);
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
