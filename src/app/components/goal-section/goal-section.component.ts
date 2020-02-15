import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../models/Goal'
import { GoalService } from '../../services/goal.service'

@Component({
  selector: 'app-goal-section',
  templateUrl: './goal-section.component.html',
  styleUrls: ['./goal-section.component.css']
})
export class GoalSectionComponent implements OnInit {
  goals: Goal[]
  constructor(private goalService: GoalService){ }
  ngOnInit(){
    this.goals = this.goalService.getGoals()
  }

}
