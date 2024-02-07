import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpCheckComponent } from './otp-check.component';

describe('OtpCheckComponent', () => {
  let component: OtpCheckComponent;
  let fixture: ComponentFixture<OtpCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpCheckComponent]
    });
    fixture = TestBed.createComponent(OtpCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
