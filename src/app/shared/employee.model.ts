import { Skill } from "./skill.model";

export class Employee{
    public id : string;
    public name : string;
    public skills : Skill[];
    public validated : number; 

    constructor(id : string,name : string , skills : Skill[]){
        this.id = id;
        this.name = name;
        this.skills = skills;
        this.validated = 1;
    }
}