import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestmainComponent } from './guestmain.component';

describe('GuestmainComponent', () => {
  let component: GuestmainComponent;
  let fixture: ComponentFixture<GuestmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
