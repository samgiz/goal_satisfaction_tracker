import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoalSectionComponent } from './goal-section.component';

describe('GoalSectionComponent', () => {
  let component: GoalSectionComponent;
  let fixture: ComponentFixture<GoalSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
