import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipapplyComponent } from './scholarshipapply.component';

describe('ScholarshipapplyComponent', () => {
  let component: ScholarshipapplyComponent;
  let fixture: ComponentFixture<ScholarshipapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipapplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholarshipapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
