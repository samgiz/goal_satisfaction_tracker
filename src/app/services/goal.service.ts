import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() { }

  getGoals(){
    return [
      {
        title: "hello", 
        value: 30,
        subgoals: [],
        enabled: true
      }
    ]
  }
}
