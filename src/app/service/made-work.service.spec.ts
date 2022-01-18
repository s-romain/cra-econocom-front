import { TestBed } from '@angular/core/testing';

import { MadeWorkService } from './made-work.service';

describe('MadeWorkService', () => {
  let service: MadeWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadeWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
