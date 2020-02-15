import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Goal } from '../models/Goal'

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goalsUrl: string = './assets/goal_info.json'
  constructor(private http:HttpClient) { }

  getGoals():Observable<Goal>{
    return this.http.get<Goal>(this.goalsUrl)
  }
}
