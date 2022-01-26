import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyReportComponent } from './add-monthly-report.component';

describe('AddMonthlyReportComponent', () => {
  let component: AddMonthlyReportComponent;
  let fixture: ComponentFixture<AddMonthlyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMonthlyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
