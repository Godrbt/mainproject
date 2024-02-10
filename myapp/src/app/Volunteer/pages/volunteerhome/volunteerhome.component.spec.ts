import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerhomeComponent } from './volunteerhome.component';

describe('VolunteerhomeComponent', () => {
  let component: VolunteerhomeComponent;
  let fixture: ComponentFixture<VolunteerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
