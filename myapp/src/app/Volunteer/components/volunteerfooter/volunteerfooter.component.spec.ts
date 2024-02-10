import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerfooterComponent } from './volunteerfooter.component';

describe('VolunteerfooterComponent', () => {
  let component: VolunteerfooterComponent;
  let fixture: ComponentFixture<VolunteerfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
