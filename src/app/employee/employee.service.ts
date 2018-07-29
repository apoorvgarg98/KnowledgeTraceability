import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Skill } from "../shared/skill.model";
import { Employee } from "../shared/employee.model";

@Injectable()
export class EmployeeService{
    constructor(private http : Http){}

    skillsUpdated = new EventEmitter<Skill[]>();
    changeSaved = new EventEmitter();

    getSkills(id : string){
        this.http.post('/employee_api/getSkills',{ id : id}).subscribe(
            (response : Response) => {
                var skills = response.json().skills;
                this.skillsUpdated.emit(skills);
            }
        );
    }

    updateEmployee(id : string , employee : Employee){
        this.http.put('/employee_api/update',{ id : id , employee : employee}).subscribe(
            (response : Response) => {
                var res = response.json();
                if(res.changeSuccess === true)
                    this.changeSaved.emit();
            }
        )
    }
}