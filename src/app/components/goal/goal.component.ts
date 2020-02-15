import { Component, OnInit, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
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
}
