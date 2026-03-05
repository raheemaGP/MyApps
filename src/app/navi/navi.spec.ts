import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviTs } from './navi.component.js';

describe('NaviTs', () => {
  let component: NaviTs;
  let fixture: ComponentFixture<NaviTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaviTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaviTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
