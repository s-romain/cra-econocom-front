import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMadeWorkComponent } from './add-made-work.component';

describe('AddMadeWorkComponent', () => {
  let component: AddMadeWorkComponent;
  let fixture: ComponentFixture<AddMadeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMadeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMadeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
