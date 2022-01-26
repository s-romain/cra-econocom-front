import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ProjectInformation} from '../entity/projectInformation';
import {catchError,Observable,of ,tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectInformationService {
  
  private projectInformationtUrl = 'http://localhost:3000/project_informations'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getProjectInformations(): Observable < ProjectInformation[] > {
    return this.http.get < ProjectInformation[] > (this.projectInformationtUrl, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched accounts')),
        catchError(this.handleError < ProjectInformation[] > ('getAccounts', []))
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
