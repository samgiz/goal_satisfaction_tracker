import { Component, OnInit, Input } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Goal } from '../../models/Goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Input() goal: Goal
  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(event: MatSliderChange) {
    // Set the label to the appropriate value
    this.goal.value = event.value;
    // TODO: send the updated value to the server? Possibly want to do that every n seconds instead to reduce number of requests (or after n seconds of inactivity)
  }
  deleteGoal() {

  }
}
