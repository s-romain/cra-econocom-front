import { TestBed } from '@angular/core/testing';

import { WeeklyReportService } from './weekly-report.service';

describe('WeeklyReportService', () => {
  let service: WeeklyReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
