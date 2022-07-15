import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingModulesListComponent } from './pricing-modules-list.component';

describe('PricingModulesListComponent', () => {
  let component: PricingModulesListComponent;
  let fixture: ComponentFixture<PricingModulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingModulesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingModulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
