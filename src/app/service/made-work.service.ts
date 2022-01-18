import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {MadeWork} from '../entity/madeWork';
import {catchError,Observable,of ,tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MadeWorkService {

  private madeWorkUrl = 'http://127.0.0.1:3000/made_works'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  addMadeWork(madeWork: MadeWork): Observable<MadeWork> {
    return this.http.post<MadeWork>(this.madeWorkUrl, madeWork, this.httpOptions);
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
