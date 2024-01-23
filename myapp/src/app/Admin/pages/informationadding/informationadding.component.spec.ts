import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationaddingComponent } from './informationadding.component';

describe('InformationaddingComponent', () => {
  let component: InformationaddingComponent;
  let fixture: ComponentFixture<InformationaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationaddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
