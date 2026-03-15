import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractionTs } from './user-interaction.component.js';

describe('UserInteractionTs', () => {
  let component: UserInteractionTs;
  let fixture: ComponentFixture<UserInteractionTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInteractionTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInteractionTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
