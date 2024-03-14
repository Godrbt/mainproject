import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedreqComponent } from './acceptedreq.component';

describe('AcceptedreqComponent', () => {
  let component: AcceptedreqComponent;
  let fixture: ComponentFixture<AcceptedreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptedreqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptedreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
