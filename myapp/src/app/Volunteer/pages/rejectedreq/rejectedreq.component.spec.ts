import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedreqComponent } from './rejectedreq.component';

describe('RejectedreqComponent', () => {
  let component: RejectedreqComponent;
  let fixture: ComponentFixture<RejectedreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectedreqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RejectedreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
