import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsLeasingComponent } from './calculations-leasing.component';

describe('CalculationsLeasingComponent', () => {
  let component: CalculationsLeasingComponent;
  let fixture: ComponentFixture<CalculationsLeasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationsLeasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsLeasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
