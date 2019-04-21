import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBookingDialogComponent } from './confirm-booking-dialog.component';

describe('ConfirmBookingDialogComponent', () => {
  let component: ConfirmBookingDialogComponent;
  let fixture: ComponentFixture<ConfirmBookingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmBookingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
