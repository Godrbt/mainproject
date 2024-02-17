import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerbookingComponent } from './volunteerbooking.component';

describe('VolunteerbookingComponent', () => {
  let component: VolunteerbookingComponent;
  let fixture: ComponentFixture<VolunteerbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerbookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
