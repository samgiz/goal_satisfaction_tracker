import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { File } from "../models/File"
import {FileService} from "../file.service"

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() file: File;
  @Input() file_name: string;
  @Output() viewChangeEmitter: EventEmitter<string> = new EventEmitter<string>()

  constructor(public fileService: FileService) {}

  ngOnInit(): void {
  }
  emitChangeView(): void {
    console.log("clicking")
    this.fileService.default_file = this.file_name;
    console.log(this.fileService.default_file)
  }

}
