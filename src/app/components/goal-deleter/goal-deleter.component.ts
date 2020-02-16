import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../models/Goal'
import { VirtualTimeScheduler } from 'rxjs';

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
    this.updateValue()
  }
  updateValue(){
    console.log("Updating value")
    if(this.goal.subgoals.length > 0)
      this.goal.value = this.goal.subgoals.reduce((a, b) => a+b.value, 0) / this.goal.subgoals.length
  }
}
