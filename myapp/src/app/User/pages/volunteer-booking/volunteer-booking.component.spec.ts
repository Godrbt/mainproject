import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerBookingComponent } from './volunteer-booking.component';

describe('VolunteerBookingComponent', () => {
  let component: VolunteerBookingComponent;
  let fixture: ComponentFixture<VolunteerBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
