import { TestBed } from '@angular/core/testing';

import { ProjectInformationService } from './project-information.service';

describe('ProjectInformationService', () => {
  let service: ProjectInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
