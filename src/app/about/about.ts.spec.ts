import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTs } from './about.component.js';

describe('AboutTs', () => {
  let component: AboutTs;
  let fixture: ComponentFixture<AboutTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
