import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../models/Goal'
import { GoalService } from '../../services/goal.service'

@Component({
  selector: 'app-goal-section',
  templateUrl: './goal-section.component.html',
  styleUrls: ['./goal-section.component.css']
})
export class GoalSectionComponent implements OnInit {
  dummy_goal: Goal
  constructor(private goalService: GoalService){ 
    this.dummy_goal = {
      title: "dummy",
      value: 0,
      subgoals: [],
      enabled: true
    }
  }
  ngOnInit(){
    this.goalService.getGoals().subscribe(goals => {
      if(goals)this.dummy_goal = goals
    })
  }

  deleteGoal(){
    
  }

}
