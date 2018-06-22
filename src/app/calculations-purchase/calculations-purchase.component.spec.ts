import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsPurchaseComponent } from './calculations-purchase.component';

describe('CalculationsPurchaseComponent', () => {
  let component: CalculationsPurchaseComponent;
  let fixture: ComponentFixture<CalculationsPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationsPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
