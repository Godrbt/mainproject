import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteermainComponent } from './volunteermain.component';

describe('VolunteermainComponent', () => {
  let component: VolunteermainComponent;
  let fixture: ComponentFixture<VolunteermainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteermainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
