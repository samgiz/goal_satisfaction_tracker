import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDeleterComponent } from './goal-deleter.component';

describe('GoalDeleterComponent', () => {
  let component: GoalDeleterComponent;
  let fixture: ComponentFixture<GoalDeleterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalDeleterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDeleterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
