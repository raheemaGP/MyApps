import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTs } from './login.component.js';

describe('LoginTs', () => {
  let component: LoginTs;
  let fixture: ComponentFixture<LoginTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
