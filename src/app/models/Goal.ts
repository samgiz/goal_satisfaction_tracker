export class Goal{
    title:string;
    value:number;
    subgoals:Goal[];
    // This is not used at the moment; it will be used to denote whether the subgoals should be shown
    enabled:boolean;
}