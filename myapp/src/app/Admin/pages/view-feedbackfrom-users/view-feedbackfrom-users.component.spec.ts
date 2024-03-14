import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedbackfromUsersComponent } from './view-feedbackfrom-users.component';

describe('ViewFeedbackfromUsersComponent', () => {
  let component: ViewFeedbackfromUsersComponent;
  let fixture: ComponentFixture<ViewFeedbackfromUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFeedbackfromUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFeedbackfromUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
