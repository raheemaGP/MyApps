import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingComponent } from './property-binding.component.js';

describe('PropertyBindingTs', () => {
  let component: PropertyBindingComponent;
  let fixture: ComponentFixture<PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
