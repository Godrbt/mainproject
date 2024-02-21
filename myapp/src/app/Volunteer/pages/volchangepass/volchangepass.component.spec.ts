import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolchangepassComponent } from './volchangepass.component';

describe('VolchangepassComponent', () => {
  let component: VolchangepassComponent;
  let fixture: ComponentFixture<VolchangepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolchangepassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolchangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
