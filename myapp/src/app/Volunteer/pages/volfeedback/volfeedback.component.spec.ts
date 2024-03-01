import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolfeedbackComponent } from './volfeedback.component';

describe('VolfeedbackComponent', () => {
  let component: VolfeedbackComponent;
  let fixture: ComponentFixture<VolfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolfeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
