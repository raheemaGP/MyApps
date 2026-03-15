import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { NaviComponent } from './navi.component.js';

describe('NaviTs', () => {
  let component: NaviComponent;
  let fixture: ComponentFixture<NaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaviComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaviComponent);
=======
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
>>>>>>> 43c60ef965704e5c977c449a32804b1ed100b1ea
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
