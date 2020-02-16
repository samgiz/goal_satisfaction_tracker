import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Goal } from '../../models/Goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {
  @Input() goal: Goal
  @Output() deleteMe: EventEmitter<Goal> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  emptyGoal(){
    return {
      title: "",
      value: this.goal.value,
      subgoals: [],
      enabled: true
    }
  }

  onInputChange(event: MatSliderChange) {
    // Set the label to the appropriate value
    this.goal.value = event.value;
    // TODO: send the updated value to the server? Possibly want to do that every n seconds instead to reduce number of requests (or after n seconds of inactivity)
  }
  requestDelete() {
    console.log("Requesting delete")
    this.deleteMe.emit(this.goal)
  }
  addSubgoal() {
    this.goal.subgoals.push(this.emptyGoal())
  }
}
