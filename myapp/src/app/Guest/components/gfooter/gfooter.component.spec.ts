import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfooterComponent } from './gfooter.component';

describe('GfooterComponent', () => {
  let component: GfooterComponent;
  let fixture: ComponentFixture<GfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
