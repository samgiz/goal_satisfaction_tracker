import { Injectable } from '@angular/core';
import { File } from './models/File'
import { Goal } from './models/Goal'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// TODO: rename File to be Section.
export class FileService {

  private files: Map<string, File> = new Map()
  private fs = (<any>window).require("fs");
  // public fileNameChange: BehaviorSubject<string[]> = new BehaviorSubject([])
  // public fileContentChange: Map<string, BehaviorSubject<File>> = new Map()
  private file_names: string[] = []
  public default_file: string
  constructor() {
    // Fetch the initial file list
    this.file_names = this.fs.readdirSync("user_data").sort()
    this.file_names.forEach(file_name => {
      this.fetchFile(file_name)
    });
    this.default_file = this.file_names[0]
    // this.fileNameChange.next(this.file_names)
  }
  private fetchFile(file_name: string): void{
    let tmp = JSON.parse(this.fs.readFileSync("user_data/" + file_name, 'utf8'))
    tmp.goals = tmp.goals || tmp.subgoals || []
    this.files.set(file_name, tmp)
    // this.files = new Map(this.files)
  }
  get_default_file(){
    // console.log("getting default component")
    // console.log("default file" + this.default_file)
    return this.default_file;
  }
  public createEmptyFile(file_name: string, title: string): void {
    this.fs.writeFileSync("user_data/" + file_name, JSON.stringify({title: title, value: 0, goals: []}), {flag: 'wx'})
    // Add entry to the available files
    this.fetchFile(file_name)
    this.file_names.push(file_name)
    this.file_names.sort()
  }
  public saveFile(file_name: string, content: File): void{
    this.files.set(file_name, content)
    this.fs.writeFileSync("user_data/" + file_name, JSON.stringify(content))
  }
  public getFileNames() : string[] {
    return this.file_names
  }
  public getGoals(file_name: string): File{
    return this.files.get(file_name);
  }
  public removeFile(file_name: string): void{
    console.log(file_name)
    this.fs.unlinkSync("user_data/" + file_name)
    this.files.delete(file_name)
    this.files = new Map(this.files)
    this.file_names.splice(this.file_names.indexOf(file_name), 1)
  }
}
