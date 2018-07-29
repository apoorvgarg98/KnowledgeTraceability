import { Skill } from "./skill.model";
import { Employee } from "./employee.model";

export class Team{
    public id : string;
    public name : string;
    public department : string;
    public description : string;
    public skills : Skill[];
    public employees : Employee[]; 

    constructor(id : string, 
                name : string, 
                department : string, 
                description : string,
                skills : Skill[],
                employees : Employee[]){
        this.id = id;
        this.name = name;
        this.department = department;
        this.description = description;
        this.skills = skills;
        this.employees = employees;
    }
}