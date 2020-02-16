import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../models/Goal'

@Component({
  selector: 'app-goal-deleter',
  templateUrl: './goal-deleter.component.html',
  styleUrls: ['./goal-deleter.component.css']
})
export class GoalDeleterComponent implements OnInit {
  @Input() goal: Goal
  constructor() { }

  ngOnInit(): void {
  }
  deleteSubGoal(g: Goal): void {
    console.log("deleting subgoal")
    this.goal.subgoals = this.goal.subgoals.filter(x => x!==g)
  }
}
