import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../models/Goal'
import { GoalService } from '../../services/goal.service'
import { HostListener } from '@angular/core';

declare var __dirname: any
// import { writeFileSync, readFileSync } from 'fs';
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
  goal_info_file: string = __dirname + '/../src/assets/goal_info.json'
  

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.ctrlKey && event.key == "s"){
      // Your row selection code
      console.log("saving")
      const fs = (<any>window).require("fs")
      fs.writeFileSync(this.goal_info_file, JSON.stringify(this.dummy_goal), 'utf-8')
    }
  }

  constructor(private goalService: GoalService){ }
  ngOnInit(){
    this.goalService.getGoals().subscribe(goals => {
      if(goals)this.dummy_goal = goals
    })
  }

  deleteSubGoal(goal){
    console.log("deleting topmost goal")
    this.dummy_goal.subgoals = this.dummy_goal.subgoals.filter(x => x!=goal)
    this.updateOverallSatisfaction()
  }
  addGoal(){
    console.log("adding topmost goal")
    this.dummy_goal.subgoals.push({
      title: "",
      value: this.dummy_goal.value,
      subgoals: [],
      enabled: true
    })
  }
  updateOverallSatisfaction(){
    console.log("Updating overall satisfaction")
    this.dummy_goal.value = this.dummy_goal.subgoals.reduce((a, b) => a+b.value, 0) / this.dummy_goal.subgoals.length
  }

}
