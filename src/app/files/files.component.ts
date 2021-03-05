import { Component, OnInit } from '@angular/core';
import { FileService } from "../file.service"

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  constructor(public fileService: FileService) { }
  public newText: string = "";
  public file_names: string[]
  ngOnInit(): void {
    // this.file_names = this.fileService.getFileNames()
    // this.fileService.fileNameChange.subscribe(
    //   () => {
    //      this.file_names = this.fileService.getFileNames()
    // })
    this.file_names = this.fileService.getFileNames()
    console.log(this.file_names)
  }
  public createNew(): void{
    console.log(this.newText)
    this.fileService.createEmptyFile(this.newText + '.json', this.newText);
    this.newText = ""
    console.log(this.newText + " updated")
    this.file_names = this.fileService.getFileNames()
    
  }

}
