import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeeklyReportComponent } from './add-weekly-report.component';

describe('AddWeeklyReportComponent', () => {
  let component: AddWeeklyReportComponent;
  let fixture: ComponentFixture<AddWeeklyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWeeklyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeeklyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
