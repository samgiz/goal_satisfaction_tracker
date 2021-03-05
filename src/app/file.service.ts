import { Injectable } from '@angular/core';
import { File } from './models/File'
import { Goal } from './models/Goal'

@Injectable({
  providedIn: 'root'
})
// TODO: rename File to be Section.
export class FileService {

  private files: Map<string, File> = new Map()
  private fs = (<any>window).require("fs");
  public default_file: string
  constructor() {
    // Fetch the initial file list
    let file_names = this.fs.readdirSync("user_data")
    file_names.forEach(file_name => {
      this.fetchFile(file_name)
    });
    this.default_file = file_names[0]
  }
  private fetchFile(file_name: string): void{
    let tmp = JSON.parse(this.fs.readFileSync("user_data/" + file_name, 'utf8'))
    tmp.goals = tmp.goals || tmp.subgoals || []
    this.files.set(file_name, tmp)
  }
  get_default_file(){
    console.log("getting default component")
    console.log("default file" + this.default_file)
    return this.default_file;
  }
  public createEmptyFile(file_name: string, title: string): void {
    this.fs.writeFileSync("user_data/" + file_name, JSON.stringify({title: title, value: 0, goals: []}), {flag: 'wx'})
    // Add entry to the available files
    this.fetchFile(file_name)
  }
  public saveFile(file_name: string, content: File): void{
    this.fs.writeFileSync("user_data/" + file_name, JSON.stringify(content))
  }
  public getFileNames() : string[] {
    return Array.from(this.files).map(([name, file]) => name).sort()
  }
  public getGoals(file_name: string): File{
    return this.files.get(file_name);
  }
}
