import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Task} from '../entity/task';
import {catchError,Observable,of ,tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeeklyReportService {

  constructor() { }
}
