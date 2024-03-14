import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedbackfromvolComponent } from './view-feedbackfromvol.component';

describe('ViewFeedbackfromvolComponent', () => {
  let component: ViewFeedbackfromvolComponent;
  let fixture: ComponentFixture<ViewFeedbackfromvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFeedbackfromvolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFeedbackfromvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
