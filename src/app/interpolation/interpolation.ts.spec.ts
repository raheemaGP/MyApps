import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationTs } from './interpolation.component.js';

describe('InterpolationTs', () => {
  let component: InterpolationTs;
  let fixture: ComponentFixture<InterpolationTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
