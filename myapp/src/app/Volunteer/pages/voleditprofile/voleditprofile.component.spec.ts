import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleditprofileComponent } from './voleditprofile.component';

describe('VoleditprofileComponent', () => {
  let component: VoleditprofileComponent;
  let fixture: ComponentFixture<VoleditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoleditprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoleditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
