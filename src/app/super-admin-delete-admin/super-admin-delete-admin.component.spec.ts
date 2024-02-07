import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminDeleteAdminComponent } from './super-admin-delete-admin.component';

describe('SuperAdminDeleteAdminComponent', () => {
  let component: SuperAdminDeleteAdminComponent;
  let fixture: ComponentFixture<SuperAdminDeleteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminDeleteAdminComponent]
    });
    fixture = TestBed.createComponent(SuperAdminDeleteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
