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
  @Output() updateValue: EventEmitter<void> = new EventEmitter()
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

  emitValueUpdate(event: MatSliderChange): void {
    // Set the label to the appropriate value
    this.goal.value = event.value;
    // TODO: emit value upwards
    console.log("emitting value upwards")
    this.updateValue.emit()
  }
  requestDelete(): void {
    console.log("Requesting delete")
    this.deleteMe.emit(this.goal)
  }
  addSubgoal(): void {
    this.goal.subgoals.push(this.emptyGoal())
  }
  
}
