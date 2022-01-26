import { TestBed } from '@angular/core/testing';

import { MonthlyReportService } from './monthly-report.service';

describe('MonthlyReportService', () => {
  let service: MonthlyReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
