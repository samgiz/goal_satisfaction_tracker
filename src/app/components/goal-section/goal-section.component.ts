import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../models/Goal'
import { GoalService } from '../../services/goal.service'

@Component({
  selector: 'app-goal-section',
  templateUrl: './goal-section.component.html',
  styleUrls: ['./goal-section.component.css']
})
export class GoalSectionComponent implements OnInit {
  dummy_goal: Goal = {
    title: "dummy",
    value: 0,
    subgoals: [],
    enabled: true
  }
  constructor(private goalService: GoalService){ }
  ngOnInit(){
    this.goalService.getGoals().subscribe(goals => {
      if(goals)this.dummy_goal = goals
    })
  }

  deleteSubGoal(goal){
    console.log("deleting subgoal")
    this.dummy_goal.subgoals = this.dummy_goal.subgoals.filter(x => x!=goal)
  }

}
