import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../models/Goal'
import { File } from '../../models/File'
import { HostListener } from '@angular/core';
import { FileService } from "../../file.service"

@Component({
  selector: 'app-goal-section',
  templateUrl: './goal-section.component.html',
  styleUrls: ['./goal-section.component.css']
})
export class GoalSectionComponent implements OnInit {
  @Input() goals: File

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.ctrlKey && event.key == "s"){
      // Your row selection code
      console.log("saving goals")
      console.log(this.goals)
      
      
      // Save the current state of the goals
      this.fileService.saveFile(this.fileService.default_file, this.goals)
      // TODO: show a save popup / flash to show that it has saved (probably in the corner)
      // TODO: autosave on close
    }
    // if(event.ctrlKey && event.key == "z"){
    //   // TODO: implement UNDO functionality
    // }
    // if(event.ctrlKey && event.key == "y"){
    //   // TODO: implement redo functionality
    // }
  }

  constructor(private fileService: FileService){ }
  ngOnInit(){
  }

  deleteSubGoal(goal){
    console.log("deleting topmost goal")
    
    this.goals.goals = this.goals.goals.filter(x => x!=goal)
    this.updateOverallSatisfaction()
  }
  addGoal(){
    console.log("adding topmost goal")
    this.goals.goals.push({
      title: "",
      value: this.goals.value,
      subgoals: [],
      showSubgoals: true
    })
  }
  updateOverallSatisfaction(){
    console.log("Updating overall satisfaction")
    this.goals.value = this.goals.goals.reduce((a, b) => a+b.value, 0) / this.goals.goals.length
  }

}
