import { Component, OnInit } from '@angular/core';
import {FileService} from '../file.service'

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(public fileService: FileService) { }

  ngOnInit(): void {
  }

}
