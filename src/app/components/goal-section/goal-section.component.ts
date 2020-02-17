import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../models/Goal'
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
  goal_info_path: string = __dirname + '/../user_data/goal_info.json'
  

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.ctrlKey && event.key == "s"){
      // Your row selection code
      console.log("saving goals")
      const fs = (<any>window).require("fs")
      // Create user_data directory if it does not already exist
      if(!fs.existsSync(__dirname + "/../user_data/")){
        fs.mkdirSync(__dirname + "/../user_data/");
      }
      // Save the current state of the goals
      fs.writeFileSync(this.goal_info_path, JSON.stringify(this.dummy_goal, null, 2), 'utf-8')
    }
  }

  constructor(){ }
  ngOnInit(){
    // load goals if they are available
    console.log("loading goals")
    const fs = (<any>window).require("fs")
    // Load the user data if it exists
    if(fs.existsSync(this.goal_info_path)){
      this.dummy_goal = JSON.parse(fs.readFileSync(this.goal_info_path, 'utf-8'))
    }
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
